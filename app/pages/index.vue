<script setup lang="ts">
import { useFetch, useSeoMeta } from '#app';
import { useAuthStore } from '#imports';
import { computed, ref, warn, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { apiRoutes } from '~/api';
import type { GetPostsResponse } from '~/interfaces/post.get.interface';
import type { Post } from '~/interfaces/post.interface';
import { queryParamToInt, queryParamToString } from '~/utils';

const SORTS = {
    date: 'По дате',
    rating: 'По рейтингу'
}
useSeoMeta({
    title: 'Главная',
    description: 'Сайт для голосования по идеям.'
});
// Типовый гвард
function isSortKey(key: string): key is keyof typeof SORTS {
    return key in SORTS
}
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const sortType = queryParamToString(route.query.sort) ?? ''
const checkedSort = ref<keyof typeof SORTS>(
    isSortKey(sortType) ? sortType : 'date'
)
const pageCurrent = ref<number>(queryParamToInt(route.query.page) ?? 1)
const dataPosts = await useFetch<GetPostsResponse>(apiRoutes().posts, {
    query: {
        sort: checkedSort,
        page: pageCurrent
    },
    watch: false,
    deep: true,
})

const sortOptions = computed(() => {
    return Object.entries(SORTS) as [keyof typeof SORTS, typeof SORTS[keyof typeof SORTS]][];
});

function sortChange<T extends keyof typeof SORTS>(value: T) {
    checkedSort.value = value
}

watch(() => ({
    checkedSort: checkedSort.value,
    pageCurrent: pageCurrent.value
}), async (data) => {
    router.replace({
        query:
            { sort: data.checkedSort, page: data.pageCurrent }
    });

    await dataPosts.refresh()
})

const updatePost = (post: Post) => {
    if (!dataPosts.data.value) {
        return
    }
    const index = dataPosts.data.value.posts.findIndex(el => el.id === post.id)
    if (index === -1) {
        return
    }
    dataPosts.data.value.posts[index] = post
}

function changePage(page: number) {
    pageCurrent.value = page
}

async function deletePost(post: Post) {
    await $fetch(apiRoutes().postsById(post.id.toString()), {
        method: 'DELETE', headers: {
            Authorization: `Bearer ${authStore.token}`
        }
    })
    await dataPosts.refresh()
}
</script>

<template>
    <div class="sort">
        <div v-for="[type, label] in sortOptions">
            <button @click="sortChange(type)"
                :style="{ color: type === checkedSort ? 'var(--color-3)' : 'var(--color-5)' }">
                {{ label }}
            </button>
        </div>
    </div>
    <div class="post-wrapper" v-for="(post, index) in dataPosts.data.value?.posts">
        <PostCard @delete-post="deletePost" :key="post.id" :post="post" @update-post="updatePost" />
    </div>
    <Pagination v-if="dataPosts.data.value" :current-page="dataPosts.data.value.page"
        :total-pages="dataPosts.data.value.total_pages" @change-page="changePage" />
</template>

<style scoped>
.post-wrapper {
    padding: 30px 0;
    border-bottom: 1px solid var(--color-4);
}

.post-wrapper:last-child {
    border-bottom: none;
}

.sort {
    padding: 16px;
    border-bottom: 1px solid var(--color-4);
    display: flex;
    align-items: center;
    gap: 24px;
}
</style>