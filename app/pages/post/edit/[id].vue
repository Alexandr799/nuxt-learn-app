<script setup lang="ts">
import { definePageMeta, useFetch, useSeoMeta } from '#imports';
import { useRoute } from 'vue-router';
import { apiRoutes } from '~/api';
import PostForm from '~/components/form/PostForm.vue';
import type { Post } from '~/interfaces/post.interface';

definePageMeta({
    middleware: 'auth'
})
useSeoMeta({
    title: 'Редактирование поста',
    description: 'Редактирование пост для голосования.'
});

const route = useRoute()
const { data, pending, error } = await useFetch<Post>(apiRoutes().postsById(route.params.id as string))

</script>

<template>
    <div class="wrap">
        <PostForm createLink="/post/create" :post="data"/>
    </div>
</template>


<style scoped>
.wrap {
    height: 800px;
    max-height: 80%;
}
</style>