import { getAllPostsMetadata } from 'lib/mdx'

import PostsList from 'components/PostsList'

export default function Posts(): JSX.Element {
  return <PostsList allPosts={getAllPostsMetadata()} />
}
