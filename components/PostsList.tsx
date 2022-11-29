import { getAllPostsMetadata } from 'lib/mdx'
import PostCard from './PostCard'

const postsListStyles: React.CSSProperties = {
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
  gridAutoRows: '15px',
}

export default function PostsList(): JSX.Element {
  return (
    <ul style={postsListStyles} data-grid>
      {getAllPostsMetadata().map((post, index) => (
        <PostCard {...post} key={index} />
      ))}
    </ul>
  )
}
