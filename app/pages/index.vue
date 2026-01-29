<script setup lang="ts">
import { useFetch, useRuntimeConfig } from '#app';
import { apiRoutes } from '~/api';
import type { GetPostsResponse } from '~/interfaces/post.get.interface';

const dataPosts = await useFetch<GetPostsResponse>(apiRoutes().posts)


</script>

<template>
    <div class="post-wrapper" v-for="post in dataPosts.data.value?.posts">
        <PostCard :post="post" />
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
</style>