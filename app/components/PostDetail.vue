<script setup lang="ts">
import { NuxtIconCss } from '@nuxt/icon/runtime/components/css.js';
import type { Post } from '~/interfaces/post.interface';
import { timeAgo } from '~/utils';

const { post } = defineProps<{ post: Post }>()
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
                {{ timeAgo(post.published_at) }}
            </div>
        </div>

        <div style="position: relative;">
            <NuxtLink :to="`/post/${post.id}`" style="position: absolute;left: 0;right: 0;top: 0;bottom: 0;" />
            <div>
                <h1 class="title">
                    {{ (post.title) }}
                </h1>
            </div>

            <div class="lead">
                {{ post.content }}
            </div>
        </div>

        <div class="foot">
            <div class="like-block">
                <div>
                    <button>
                        <NuxtIconCss name="icons:like" />
                    </button>
                    <span>
                        {{ post.likes }}
                    </span>
                </div>
                <div>
                    <button>
                        <NuxtIconCss name="icons:dislike" />
                    </button>
                    <span>
                        {{ post.dislikes }}
                    </span>
                </div>
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
    margin-bottom: 30px;
    font-weight: 300;
    color: var(--color-3);
    line-height: 24px;
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
</style>