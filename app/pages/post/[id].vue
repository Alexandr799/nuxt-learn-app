<script setup lang="ts">
import { useFetch } from '#app';
import { useRoute } from 'vue-router';
import { apiRoutes } from '~/api';
import type { Post } from '~/interfaces/post.interface';

const route = useRoute()
const { data, pending, error } = await useFetch<Post>(apiRoutes().postsById(route.params.id as string))

</script>
<template>
    <PostDetail v-if="data" :post="data" />
</template>