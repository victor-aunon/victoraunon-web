import Link from 'next/link'
import type { PostMetadata } from 'types/Post'
import styles from './PostTags.module.scss'

interface PostTagsProps {
  tags: PostMetadata['tags']
}

export default function PostTags({ tags }: PostTagsProps): JSX.Element {
  return (
    <section className={styles.postTagsSection}>
      <h3>Tags relacionados:</h3>
      <div className={styles.tagsContainer}>
        {tags.map((tag) => (
          <div key={`postTag-${tag}`} className={styles.tag}>
            <Link href={`/posts?tag=${tag}`}>{tag}</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
