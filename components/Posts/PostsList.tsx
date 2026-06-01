'use client'

import { useContext, useMemo, type JSX } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { QueryContext } from 'contexts/QueryContext'
import { PostCard, PostCardSimple } from './PostCard'
import type { PostMetadata } from 'types/Post'

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
            <h3 className="text-sm text-zinc-400 mb-4">
              {`Posts ${tag !== null ? 'con el tag ' : ' '}`}
              {tag !== null ? (
                <span className="text-zinc-100 font-semibold">{tag}</span>
              ) : (
                ' '
              )}
              {`${query !== '' ? ' y que incluyen ' : ' '}`}
              {query !== '' ? (
                <span className="text-zinc-100 font-semibold">{query}</span>
              ) : (
                ' '
              )}
            </h3>
          )}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
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
        <div className="text-center text-zinc-400 py-16">
          No hay posts que coincidan con tu búsqueda 🫂
        </div>
      )}
    </>
  )
}
