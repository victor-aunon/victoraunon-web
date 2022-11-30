import { createContext } from 'react'
import { PostMetadata } from 'interfaces/Post'

export const PostsContext = createContext({
  posts: [] as PostMetadata[],
  query: '',
  setPosts: (posts: PostMetadata[]) => {},
  setQuery: (query: string) => {},
})
