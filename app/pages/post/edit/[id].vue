<script setup lang="ts">
import { definePageMeta, useSeoMeta } from '#imports';

definePageMeta({
    middleware: 'auth'
})
useSeoMeta({
    title: 'Редактирование поста',
    description: 'Редактирование пост для голосования.'
});
</script>

<template>
    <div>
        Редактирование поста
    </div>
</template>