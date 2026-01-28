<script setup lang="ts">

import { NuxtIconCss } from '@nuxt/icon/runtime/components/css.js';

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
                <button>
                                    <nuxt-icon-css name="icons:exit" />
                </button>
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