import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "#app";
import type { User } from "~/interfaces/user.interface";

export default defineNuxtRouteMiddleware(() => {
    const auth = useCookie<{ token: string, user: User }|undefined>('auth')

    if (auth?.value?.token) {
        return navigateTo('/')
    }
})