import { Suspense, type JSX } from 'react'
import { getAllPostsMetadata } from 'lib/mdx'
import { PostsList } from 'components/Posts'

export default async function Home(): Promise<JSX.Element> {
  const allPosts = await getAllPostsMetadata()
  return (
    <Suspense>
      <PostsList allPosts={allPosts} />
    </Suspense>
  )
}
