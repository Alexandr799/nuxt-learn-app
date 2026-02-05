import { piniaPluginPersistedstate } from "#imports";
import { defineStore } from "pinia";
import { ref } from "vue";
import { apiRoutes } from "~/api";
import type { AuthResponse } from "~/interfaces/auth.response";
import type { User } from "~/interfaces/user.interface";

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string>()
    const user = ref<User>()
    const error = ref<string>()
    async function auth(email: string, password: string) {
        error.value = undefined
        user.value = undefined
        token.value = undefined
        try {
            const data = await $fetch<AuthResponse>(apiRoutes().auth, {
                method: 'POST',
                body: {
                    email,
                    password,
                }
            })
            user.value = data.user
            token.value = data.token
        } catch (e) {
            if (e instanceof Error) {
                error.value = e.message
            } else {
                error.value = 'Не удалось авторизаться...'
            }
        }
    }

    function logout() {
        user.value = undefined
        token.value = undefined
        error.value = undefined
    }

    function getError() {
        return error.value
    }

    return {
        user,
        token,
        auth,
        logout,
        getError
    }
}, {
    persist: {
        storage: piniaPluginPersistedstate.cookies()
    }
})