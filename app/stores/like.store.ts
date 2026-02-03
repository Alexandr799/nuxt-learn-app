import { piniaPluginPersistedstate } from "#imports";
import { defineStore } from "pinia";
import { ref } from "vue";
import { apiRoutes } from "~/api";
import type { ActionPost } from "~/interfaces/action.post.interface";
import type { Post } from "~/interfaces/post.interface";

export const useActionPostStore = defineStore('action-posts-store', () => {
    const actionsPosts = ref<Array<ActionPost>>([])

    async function likePost(id: number) {
        actionsPosts.value = actionsPosts.value.filter(el => el.id !== id)
        actionsPosts.value.push({ id, action: 'liked' })
        return await $fetch<Post>(apiRoutes().likePost(id.toString()), { method: 'POST' })
    }

    async function dislikePost(id: number) {
        actionsPosts.value = actionsPosts.value.filter(el => el.id !== id)
        actionsPosts.value.push({ id, action: 'dislike' })
        return await $fetch<Post>(apiRoutes().dislikePost(id.toString()), { method: 'POST' })
    }

    async function toogleLike(id: number) {
        const existsLike = actionsPosts.value.findIndex(el => el.id === id && el.action === 'liked')
        if (existsLike >= 0) {
            actionsPosts.value = actionsPosts.value.filter(el => el.id !== id)
            return await $fetch<Post>(apiRoutes().postsById(id.toString()))
        } else {
            return likePost(id)
        }
    }

    async function toogleDislike(id: number) {
        const existsDislike = actionsPosts.value.findIndex(el => el.id === id && el.action === 'dislike')
        if (existsDislike >= 0) {
            actionsPosts.value = actionsPosts.value.filter(el => el.id !== id)
            return await $fetch<Post>(apiRoutes().postsById(id.toString()))
        } else {
            return dislikePost(id)
        }
    }

    function existsLike(id: number) {
        return actionsPosts.value.findIndex(el => el.id === id && el.action === 'liked') >= 0
    }

    function existsDislike(id: number) {
        return actionsPosts.value.findIndex(el => el.id === id && el.action === 'dislike') >= 0
    }

    return {
        actionsPosts,
        toogleLike,
        toogleDislike,
        existsLike,
        existsDislike
    }
}, {
    persist: {
        storage: piniaPluginPersistedstate.cookies()
    }
})