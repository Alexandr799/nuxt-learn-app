<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
    <input class="input" type="text" v-model="model">
</template>

<style scoped>
.input {
    border-radius: 20px;
    padding: 8px 20px;
    border: 1px solid var(--color-4);
    outline: none;
}
input::placeholder {
    color:var(--color-6);
}
</style>