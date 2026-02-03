<script setup lang="ts">
import { useActionPostStore } from '#imports';
import { NuxtIconCss } from '@nuxt/icon/runtime/components/css.js';
import type { Post } from '~/interfaces/post.interface';
import { timeAgo } from '~/utils';

const props = defineProps<{ post: Post }>()
const emit = defineEmits<{
    (e: 'updatePost', post: Post): void
}>()
const actionPostStore = useActionPostStore()
async function like(id: number) {
    const newPost = await actionPostStore.toogleLike(id)
    emit('updatePost', newPost)
}

async function disLike(id: number) {
    const newPost = await actionPostStore.toogleDislike(id)
    emit('updatePost', newPost)
}

</script>

<template>
    <article>
        <div class="head">
            <div class="logo">
                <NuxtImg class="img" alt="Лого Компании" width="24" height="24"
                    src="https://placeholder.apptor.studio/200/200/product1.png" />
            </div>
            <div class="company">
                PurpleSchool
            </div>
            <div class="data">
                {{ timeAgo(props.post.published_at) }}
            </div>
        </div>

        <div style="position: relative;">
            <NuxtLink :to="`/post/${props.post.id}`" style="position: absolute;left: 0;right: 0;top: 0;bottom: 0;" />
            <div>
                <h3 class="title">
                    {{ (props.post.title) }}
                </h3>
            </div>

            <div class="lead clamp">
                {{ props.post.content }}
            </div>
        </div>

        <div class="foot">
            <div class="like-block">
                <div>
                    <button @click="like(post.id)">
                        <NuxtIconCss :name="actionPostStore.existsLike(post.id) ? 'icons:like-fill' : 'icons:like'" />
                    </button>
                    <span>
                        {{ post.likes }}
                    </span>
                </div>
                <div>
                    <button @click="disLike(post.id)">
                        <NuxtIconCss
                            :name="actionPostStore.existsDislike(post.id) ? 'icons:dislike-fill' : 'icons:dislike'" />
                    </button>
                    <span>
                        {{ post.dislikes }}
                    </span>
                </div>
            </div>
            <div class="edit-block">
                <button>
                    <NuxtIconCss name="icons:trash" />
                </button>
                <button>
                    <span class="edit-button">
                        <span>
                            <NuxtIconCss name="icons:edit" />
                        </span>
                        <span>
                            Изменить
                        </span>
                    </span>
                </button>
            </div>
        </div>
    </article>
</template>

<style scoped>
.head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 8px;
}

.title {
    margin: 0;
    padding: 0;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 12px;
    color: var(--color-2);
}

.lead {
    margin-bottom: 12px;
    font-weight: 300;
    color: var(--color-3);
    line-height: 24px;
}

.clamp {
    line-clamp: 2;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 100%;
}

.logo {
    margin-right: 8px;
}

.company {
    margin-right: 16px;
    font-size: 14px;
}

.data {
    color: var(--color-5);
    font-size: 14px;
}

.img {
    border-radius: 50%;
}

.foot {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-between;
}

.like-block {
    display: flex;
    gap: 12px;
}

.edit-block {
    display: flex;
    gap: 16px;
}

.edit-button {
    display: flex;
    gap: 4px;
}
</style>