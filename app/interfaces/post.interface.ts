export interface Post {
  id: number
  title: string
  content: string
  author_id: number
  likes: number
  dislikes: number
  rating: number
  published_at: string // ISO date
  updated_at: string   // ISO date
}
