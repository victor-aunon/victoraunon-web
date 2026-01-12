'use client'

import dynamic from 'next/dynamic'
import { JSX } from 'react'
import type { Post } from 'types/Post'

const Article = dynamic(
  async () =>
    await import('components/Posts/Article').then((mod) => mod.Article),
  { ssr: false }
)

interface ClientArticleProps {
  content: Post['content']
  metadata: Post['metadata']
  commentsBoxShortname: string
}

export default function ClientArticle(props: ClientArticleProps): JSX.Element {
  return <Article {...props} />
}
