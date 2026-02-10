<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface';
import VButtonPrimary from '../ui/buttons/VButtonPrimary.vue';
import { ref } from 'vue';
import { apiRoutes } from '~/api';
import { navigateTo } from '#app';
import { useAuthStore } from '#imports';

const { post, createLink } = defineProps<{ post?: Post, createLink:string }>()
const thema = ref<string>(post?.title || '')
const text = ref<string>(post?.content || '')
const authStore = useAuthStore()

async function submit() {
    if (!thema.value.trim() || !text.value.trim()) {
        return
    }
    const body = {
        "title": thema.value,
        "content": text.value
    }

    if (post) {
        const data = await $fetch<Post>(apiRoutes().postsById(post.id.toString()), {
            method: 'PUT',
            body,
            headers: {
                Authorization: `Bearer ${authStore.token}`
            }
        })
        thema.value = data.title
        text.value = data.content
        return
    }

    const data = await $fetch(apiRoutes().postCreate, {
        method: 'POST',
        body,
        headers: {
            Authorization: `Bearer ${authStore.token}`
        }
    })
    navigateTo('/')

}
</script>

<template>
    <form @submit.stop.prevent="submit"
        style="position: relative;;display: flex;flex-direction:column;height: 100%;padding-left: 50px;padding-top: 5px;">
        <NuxtLink class="plus" :to="createLink">
            <span>
                +
            </span>
        </NuxtLink>
        <div class="line">

        </div>
        <div style="padding-bottom: 20px; width: 100%;">
            <input v-model="thema" type="text" class="thema" placeholder="Тема">
        </div>
        <div style="width: 100%;flex-grow: 1;">
            <textarea v-model="text" placeholder="Текст...." class="text"></textarea>
        </div>
        <div style="display: flex;justify-content: flex-end; padding: 20px 0;width: 100%;">
            <VButtonPrimary :disabled="!thema.trim() || !text.trim()">Сохранить</VButtonPrimary>
        </div>
    </form>
</template>

<style scoped>
.thema {
    width: 100%;
    outline: none;
    border: none;
}

.thema::placeholder {
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: var(--color-6);
}

.text {
    width: 100%;
    outline: none;
    border: none;
    font-family: Roboto;
    font-weight: 300;
    font-style: Light;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    height: 100%;
    resize: none;
}

.plus {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: var(--color-7);
    color: var(--color-2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    position: absolute;
    left: 0;
    top: 0;
}

.line {
    position: absolute;
    left: 17px;
    top: 34px;
    height: calc(100% - 114px);
    border: 1px solid var(--color-4);
}
</style>