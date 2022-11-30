'use client'
import { useContext, useEffect, useState } from 'react'
import { PostsContext } from 'contexts/PostsContext'
import { PostMetadata } from 'interfaces/Post'
import PostCard from './PostCard'

const postsListStyles: React.CSSProperties = {
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
  gridAutoRows: '15px',
}

const noResultsStyles: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px',
  fontSize: '1.5rem',
}

interface PostsListProps {
  allPosts: PostMetadata[]
}

export default function PostsList({ allPosts }: PostsListProps): JSX.Element {
  const { posts, setPosts, query } = useContext(PostsContext)
  const [filteredPosts, setFilteredPosts] = useState(allPosts)
  setPosts(allPosts)

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
        <ul style={postsListStyles} data-grid>
          {filteredPosts.map((post, index) => (
            <PostCard {...post} key={index} />
          ))}
        </ul>
      ) : (
        <div style={noResultsStyles}>
          No hay posts que coincidan con tu búsqueda 🫂
        </div>
      )}
    </>
  )
}
