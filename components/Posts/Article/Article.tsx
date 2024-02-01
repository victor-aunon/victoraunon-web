'use client'

import { useRef } from 'react'
import { CommentsBox } from 'components/CommentsBox'
import MDContent from './MDContent'
import { PostInfo } from './PostInfo'
import { PostTags } from './PostTags'
import { ReadProgressBar } from './ReadProgressBar'
import type { Post } from 'types/Post'
import styles from './Article.module.scss'

interface ArticleProps {
  content: Post['content']
  metadata: Post['metadata']
  commentsBoxShortname: string
}

export default function Article(props: ArticleProps): JSX.Element {
  const { title, slug, tags, date, author, readTime } = props.metadata
  const { content, commentsBoxShortname } = props
  const articleRef = useRef(null)
  return (
    <>
      <ReadProgressBar articleRef={articleRef} />
      <article ref={articleRef} className={styles.article}>
        <PostInfo {...{ author, date, readTime }} />
        <MDContent content={content} />
        <PostTags tags={tags} />
      </article>
      <CommentsBox slug={slug} title={title} shortname={commentsBoxShortname} />
    </>
  )
}
