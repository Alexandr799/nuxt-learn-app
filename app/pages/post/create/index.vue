<script setup lang="ts">
import { definePageMeta, useSeoMeta } from '#imports';

definePageMeta({
    middleware: 'auth'
})
useSeoMeta({
    title: 'Создания поста',
    description: 'Создать пост для голосования.'
});
</script>

<template>
    <div>
        Создание поста
    </div>
</template>