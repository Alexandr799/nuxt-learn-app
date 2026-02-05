<script setup lang="ts">
import { definePageMeta } from '#imports';
import AuthForm from '~/components/form/AuthForm.vue';

definePageMeta({
    layout: 'auth',
    middleware: 'noauth'
})
</script>
<template>
    <main class="wrapper" style="min-height: 100vh;">
        <div class="form-wrap">
            <AuthForm />
        </div>
    </main>
</template>

<style scoped >
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-wrap {
    max-width: 332px;
    padding: 16px;
    width: 100%;
}
</style>