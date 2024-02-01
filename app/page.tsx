import { getAllPostsMetadata } from 'lib/mdx'
import { PostsList } from 'components/Posts'

export default function Home(): JSX.Element {
  return <PostsList allPosts={getAllPostsMetadata()} />
}
