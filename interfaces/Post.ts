import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface Post {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
  metadata: PostMetadata
}

export interface PostMetadata {
  slug: string
  title: string
  author: string
  excerpt: string
  date: string
  tags: string[]
  readTime: number
  imageUrl?: string
  imageBlurUrl?: string
  videoUrl?: string
}
