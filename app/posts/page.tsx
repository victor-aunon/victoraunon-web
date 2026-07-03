import { Suspense, type JSX } from 'react'
import { getAllPostsMetadata } from 'lib/mdx'
import { PostsList } from 'components/Posts'
import {
  siteConfig,
  commonMetadata,
  commonMetaOpenGraph,
} from 'app/commonMetadata'
import type { Metadata } from 'next'

const { name, website } = siteConfig

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${name} - Posts`,
  alternates: {
    canonical: `https://${website}/posts`,
  },
  openGraph: {
    ...commonMetaOpenGraph,
    url: `https://${website}/posts`,
    title: `${name} - Posts`,
  },
}

export default async function Posts(): Promise<JSX.Element> {
  const allPosts = await getAllPostsMetadata()
  return (
    <Suspense>
      <PostsList allPosts={allPosts} />
    </Suspense>
  )
}
