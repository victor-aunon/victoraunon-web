'use client'

import { useRef, type JSX } from 'react'
import dynamic from 'next/dynamic'
import MDContent from './MDContent'
import { PostInfo } from './PostInfo'
import { PostTags } from './PostTags'
import { PostTOC } from './PostTOC'
import PostHero from './PostHero'
import type { Post } from 'types/Post'

const ReadProgressBar = dynamic(
  async () =>
    await import('./ReadProgressBar').then((mod) => mod.ReadProgressBar),
  { ssr: false }
)

const CommentsBox = dynamic(
  async () =>
    await import('components/CommentsBox').then((mod) => mod.CommentsBox),
  { ssr: false }
)

interface ArticleProps {
  content: Post['content']
  metadata: Post['metadata']
  commentsBoxShortname: string
}

export default function Article(props: ArticleProps): JSX.Element {
  const { title, slug, tags, date, author, readTime, imageUrl } = props.metadata
  const { content, commentsBoxShortname } = props
  const articleRef = useRef<HTMLElement>(null)
  return (
    <>
      <ReadProgressBar articleRef={articleRef} />
      {/* PostHero spans the full container width — no max-w constraint */}
      <div className="w-full px-4">
        <PostHero title={title} slug={slug} imageUrl={imageUrl} />
      </div>
      <article ref={articleRef} className="max-w-3xl mx-auto px-4 pb-8 w-full">
        <PostInfo {...{ author, date, readTime }} />
        <PostTOC />
        <div className="prose prose-zinc prose-invert max-w-none">
          <MDContent content={content} />
        </div>
        <PostTags tags={tags} />
      </article>
      <CommentsBox slug={slug} title={title} shortname={commentsBoxShortname} />
    </>
  )
}
