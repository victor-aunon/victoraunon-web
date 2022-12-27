'use client'

import { useRef } from 'react'
import { Post } from 'interfaces/Post'
import MDContent from 'components/MDContent'
import PostTags from 'components/PostTags'
import CommentsBox from 'components/CommentsBox'
import ReadProgressBar from 'components/ReadProgressBar'

interface ArticleProps {
  content: Post['content']
  metadata: Post['metadata']
  commentsBoxShortname: string
}

export default function Article(props: ArticleProps): JSX.Element {
  const { title, slug, tags } = props.metadata
  const { content, commentsBoxShortname } = props
  const articleRef = useRef(null)
  return (
    <>
      <ReadProgressBar articleRef={articleRef} />
      <article ref={articleRef}>
        <p>{title}</p>
        <MDContent content={content} />
        <PostTags tags={tags} />
      </article>
      <CommentsBox slug={slug} title={title} shortname={commentsBoxShortname} />
    </>
  )
}
