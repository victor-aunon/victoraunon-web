import { getAllPostsMetadata } from 'lib/mdx'
import PostsList from 'components/PostsList'

export default function Home(): JSX.Element {
  return <PostsList allPosts={getAllPostsMetadata()} />
}
