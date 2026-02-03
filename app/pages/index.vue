<script setup lang="ts">
import { useFetch } from '#app';
import { computed, ref, warn, watch } from 'vue';
import { apiRoutes } from '~/api';
import type { GetPostsResponse } from '~/interfaces/post.get.interface';
import type { Post } from '~/interfaces/post.interface';

const SORTS = {
    date: 'По дате',
    rating: 'По рейтингу'
}

const checkedSort = ref<keyof typeof SORTS>('date')
const pageCurrent = ref<number>(1)
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
}), async () => {
    dataPosts.refresh()
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
        <PostCard :key="post.id" :post="post" @update-post="updatePost" />
    </div>
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