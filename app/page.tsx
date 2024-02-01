import { Suspense } from 'react'
import { getAllPostsMetadata } from 'lib/mdx'
import { PostsList } from 'components/Posts'

export default function Home(): JSX.Element {
  return (
    <Suspense>
      <PostsList allPosts={getAllPostsMetadata()} />
    </Suspense>
  )
}
