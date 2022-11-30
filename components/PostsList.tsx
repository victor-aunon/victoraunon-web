'use client'

import { useContext, useEffect, useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import styles from 'styles/PostsList.module.scss'
import { PostsContext } from 'contexts/PostsContext'
import { PostMetadata } from 'interfaces/Post'
import PostCard from './PostCard'
import PostCardSimple from './PostCardSimple'

interface PostsListProps {
  allPosts: PostMetadata[]
}

export default function PostsList({ allPosts }: PostsListProps): JSX.Element {
  const { posts, setPosts, query } = useContext(PostsContext)
  const [filteredPosts, setFilteredPosts] = useState(allPosts)
  setPosts(allPosts)
  const urlParams = useSearchParams()
  const path = usePathname()
  const tag = urlParams.get('tag')

  useEffect(() => {
    if (query !== '') {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.slug.toLowerCase().includes(query) ||
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.tags.join(' ').toLowerCase().includes(query)
        )
      )
    } else {
      setFilteredPosts(allPosts)
    }
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
