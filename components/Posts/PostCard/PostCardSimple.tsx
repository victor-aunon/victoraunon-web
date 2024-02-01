'use client'

import Link from 'next/link'
import PostDate from './PostDate'
import type { PostMetadata } from 'types/Post'
import styles from './PostCardSimple.module.scss'

export default function PostCardSimple(postInfo: PostMetadata): JSX.Element {
  return (
    <li>
      <Link href={`/posts/${postInfo.slug}`} className={styles.postCard}>
        <h2 className={styles.postCardTitle}>{postInfo.title}</h2>
        <div className={styles.postDate}>
          <PostDate date={postInfo.date} />
        </div>
      </Link>
    </li>
  )
}
