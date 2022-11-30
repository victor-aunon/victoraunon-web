'use client'

import Link from 'next/link'
import styles from 'styles/PostCardSimple.module.scss'
import { PostMetadata } from 'interfaces/Post'
import PostDate from './PostDate'

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
