<script setup lang="ts">
const { href } = defineProps<{ href?: string }>()

</script>

<template>
    <button class="primary" v-if="!href">
        <slot></slot>
    </button>
    <NuxtLink class="primary" :to="href" v-else>
        <slot></slot>
    </NuxtLink>
</template>

<style>
.primary {
    outline: none;
    border: none;
    text-decoration: none;
    color: var(--color-1);
    background-color: var(--color-2);
    font-weight: 500;
    font-size: 16px;
    padding: 12px;
    line-height: 100%;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
}
</style>