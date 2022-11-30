'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { PostsContext } from 'contexts/PostsContext'
import styles from 'styles/CloudTag.module.scss'

interface TagsMap {
  [key: string]: number
}

export default function CloudTag(): JSX.Element {
  const { posts } = useContext(PostsContext)

  const getFontSize = (count: number): string => {
    if (count > 30) return 'large'
    if (count > 20) return 'big'
    if (count > 10) return 'normal'
    return 'small'
  }

  // Calculate the number of tags and their repetitions across the posts
  const tags = posts.reduce<TagsMap>((tagsMap, post) => {
    post.tags.forEach((tag) => {
      if (tag in tagsMap) {
        tagsMap[tag] = tagsMap[tag] + 1
      } else {
        tagsMap[tag] = 1
      }
    })
    return tagsMap
  }, {})

  return (
    <div className={styles.cloudTag}>
      <h2>Tags populares</h2>
      {/* Sort the tags according to their frequency and take the first 20 tags */}
      {Object.entries(tags)
        .sort((tag1, tag2) => (tag2[1] > tag1[1] ? 1 : -1))
        .slice(0, 20)
        .map((tag) => {
          const [tagName, count] = tag
          return (
            <span
              key={tagName}
              className={styles.tag}
              data-font-size={getFontSize(count)}
            >
              <Link href={`/posts?tag=${tagName}`}>{tagName}</Link>
            </span>
          )
        })}
    </div>
  )
}
