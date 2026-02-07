<script setup lang="ts">

import { navigateTo, useAuthStore } from '#imports';
import { NuxtIconCss } from '@nuxt/icon/runtime/components/css.js';
const store = useAuthStore()
const exit = () => {
    if (store.token) {
        store.logout()
        navigateTo('/login')
    } else {
        navigateTo('/login')
    }
}
</script>

<template>
    <div class="wrap">
        <div class="menu">
            <div>
                <nuxt-link to="/">
                    <nuxt-icon-css name="icons:home" />
                </nuxt-link>
            </div>
            <div>
                <div style="display: flex;flex-direction: column;gap: 4px;justify-content: center;">
                    <div v-if="store.token">
                        <img style="width: 24px;height: 24px; border-radius: 50%;"
                            src="~/assets//990e8d337d62d336a9b0fa0fc4138903de3650d7.png" alt="">
                    </div>
                    <button @click="exit">
                        <nuxt-icon-css name="icons:exit" />
                    </button>
                </div>
            </div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.wrap {
    display: flex;
    gap: 20px;
    min-height: 100vh;
}

.menu {
    padding: 20px;
    border-right: 1px solid var(--color-4);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.content {
    flex-grow: 1;
    padding: 20px 60px 40px 60px;
}
</style>