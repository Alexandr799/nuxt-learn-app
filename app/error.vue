<script setup lang="ts">
import type { NuxtError } from '#app';
import VButtonPrimary from '~/components/buttons/VButtonPrimary.vue';

const { error } = defineProps<{ error: NuxtError }>()
</script>

<template>
    <div class="wrap">
        <h1 class="title">
            {{ error.status }}
        </h1>
        <div class="lead">
            {{ error.status == 404 ? 'Страница не найдена, вернитесь на главную страницу' : 'Что-то пошло не так...' }}
        </div>
        <div>
            <VButtonPrimary :style="{ width: '301px', display:'inline-block' }" href="/">
                На главную
            </VButtonPrimary>
        </div>
    </div>
</template>

<style scoped>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
}

.title {
    margin: 0 0 20px 0;
    font-weight: 500;
    font-size: 120px;
    color: var(--color-3);
}

.lead {
    color: var(--color-3);
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 30px;
}
</style>