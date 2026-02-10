<script setup lang="ts">
import { definePageMeta, useSeoMeta } from '#imports';
import PostForm from '~/components/form/PostForm.vue';

definePageMeta({
    middleware: 'auth'
})
useSeoMeta({
    title: 'Создания поста',
    description: 'Создать пост для голосования.'
});
</script>

<template>
    <div class="wrap">
        <PostForm createLink="/post/create"/>
    </div>
</template>

<style scoped>
.wrap {
    height: 800px;
    max-height: 80%;
}
</style>