import { useRuntimeConfig } from "#app"

export const apiRoutes = () => {
    const config = useRuntimeConfig()
    return {
        posts: `${config.public.API_URL}/posts`,
        postsById: (id:string) => `${config.public.API_URL}/posts/${id}`
    }
}