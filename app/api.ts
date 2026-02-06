import { useRuntimeConfig } from "#app"

export const apiRoutes = () => {
    const config = useRuntimeConfig()
    return {
        posts: `${config.public.API_URL}/posts`,
        postsById: (id: string) => `${config.public.API_URL}/posts/${id}`,
        likePost: (id: string) => `${config.public.API_URL}/posts/${id}/like`,
        dislikePost: (id: string) => `${config.public.API_URL}/posts/${id}/dislike`,
        auth: `${config.public.API_URL}/auth/login`
    }
}