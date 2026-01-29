import type { Post } from "./post.interface"

export interface GetPostsResponse {
  posts: Post[]
  total: number
  page: number
  page_size: number
  total_pages: number
}