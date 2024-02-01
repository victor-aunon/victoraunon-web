'use client'

import { useContext, useMemo } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { QueryContext } from 'contexts/QueryContext'
import { PostCard, PostCardSimple } from './PostCard'
import type { PostMetadata } from 'types/Post'
import styles from './PostsList.module.scss'

interface PostsListProps {
  allPosts: PostMetadata[]
}

export default function PostsList({ allPosts }: PostsListProps): JSX.Element {
  const { query } = useContext(QueryContext)
  const urlParams = useSearchParams()
  const path = usePathname()
  const tag = urlParams.get('tag')

  const filteredPosts = useMemo(() => {
    if (query !== '') {
      return allPosts.filter(
        (post) =>
          post.slug.toLowerCase().includes(query) ||
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.join(' ').toLowerCase().includes(query)
      )
    }
    return allPosts
  }, [query])

  return (
    <>
      {filteredPosts.length > 0 ? (
        <>
          {path === '/posts' && (
            <h3 className={styles.postsListsQueryTitle}>
              {`Posts ${tag !== null ? 'con el tag ' : ''}`}
              {tag !== null ? <span>{tag}</span> : ''}
              {`${query !== '' ? ' y que incluyen ' : ''}`}
              {query !== '' ? <span>{query}</span> : ''}
            </h3>
          )}
          <ul
            className={
              path === '/posts' ? styles.postsListWithTag : styles.postsList
            }
            data-grid
          >
            {path === '/posts'
              ? filteredPosts
                  .filter((post) => {
                    if (tag === null) return post
                    else return post.tags.includes(tag)
                  })
                  .map((post, index) => (
                    <PostCardSimple {...post} key={index} />
                  ))
              : filteredPosts.map((post, index) => (
                  <PostCard {...post} key={index} />
                ))}
          </ul>
        </>
      ) : (
        <div className={styles.noResults}>
          No hay posts que coincidan con tu búsqueda 🫂
        </div>
      )}
    </>
  )
}
