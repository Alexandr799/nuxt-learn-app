<script setup lang="ts">
import { NuxtIconCss } from '@nuxt/icon/runtime/components/css.js';

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
                4 дня назад
            </div>
        </div>

        <div>
            <h3 class="title">
                Добавить функцию голосования
            </h3>
        </div>

        <div class="lead">
            Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более
            полезна, а какая нет. После добавления поста появляется...
        </div>

        <div class="foot">
            <div class="like-block">
                <div>
                    <button>
                        <NuxtIconCss name="icons:like" />
                    </button>
                    <span>
                        10
                    </span>
                </div>
                <div>
                    <button>
                        <NuxtIconCss name="icons:dislike" />
                    </button>
                    <span>
                        3
                    </span>
                </div>
            </div>
            <div class="edit-block">
                <button>
                    <NuxtIconCss name="icons:trash" />
                </button>
                <button >
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