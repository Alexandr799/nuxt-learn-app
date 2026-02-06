<script setup lang="ts">
import { navigateTo, ref, useAuthStore } from '#imports';
import VButtonPrimary from '../ui/buttons/VButtonPrimary.vue';
import VInputText from '../ui/input/VInputText.vue';
import { NuxtIconSvg } from '@nuxt/icon/runtime/components/svg.js';
const authStore = useAuthStore()
const email = ref<string>()
const password = ref<string>()

async function submit() {
    if (email.value && password.value) {
        console.log(123)
        await authStore.auth(email.value, password.value)
        if (!authStore.getError()) {
            navigateTo('/')
        }
    }
}
</script>

<template>
    <div style="width: 100%;">
        <div class="title" style="text-align: center;">
            Вход на платформу
        </div>
        <form @submit.prevent="submit" style="width: 100%;">
            <div class="line">
                <NuxtIconSvg style="position: absolute;top:50%;left: 15px;transform: translateY(-50%);"
                    name="icons:inbox" />
                <VInputText v-model="email" placeholder="Email" style="width: 100%; padding-left: 40px;" />
            </div>
            <div class="line">
                <NuxtIconSvg style="position: absolute;top:50%;left: 15px;transform: translateY(-50%);"
                    name="icons:key" />
                <VInputText type="password"  v-model="password" placeholder="Пароль" style="width: 100%; padding-left: 40px;" />
            </div>
            <div style="padding-top: 10px;">
                <VButtonPrimary style="width: 100%;">
                    Войти в аккаунт
                </VButtonPrimary>
            </div>
        </form>
        <div v-if="authStore.getError()" style="color:red;padding-top: 10px;">
            {{ authStore.getError() }}
        </div>
    </div>
</template>

<style scoped>
.title {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    margin-bottom: 20px;
}

.line {
    margin-bottom: 16px;
    position: relative;
}
</style>