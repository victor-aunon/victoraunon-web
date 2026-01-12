'use client'

import { useRef, type JSX } from 'react'
import dynamic from 'next/dynamic'
import MDContent from './MDContent'
import { PostInfo } from './PostInfo'
import { PostTags } from './PostTags'
import { PostTOC } from './PostTOC'
import type { Post } from 'types/Post'
import styles from './Article.module.scss'

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
  const { title, slug, tags, date, author, readTime } = props.metadata
  const { content, commentsBoxShortname } = props
  const articleRef = useRef<HTMLElement>(null)
  return (
    <>
      <ReadProgressBar articleRef={articleRef} />
      <article ref={articleRef} className={styles.article}>
        <PostInfo {...{ author, date, readTime }} />
        <PostTOC />
        <MDContent content={content} />
        <PostTags tags={tags} />
      </article>
      <CommentsBox slug={slug} title={title} shortname={commentsBoxShortname} />
    </>
  )
}
