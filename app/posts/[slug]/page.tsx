import { getPostBySlug, getAllPostsSlug, GetAllPostsSlug } from 'lib/mdx'
import ClientArticle from './ClientArticle'
import type { ParsedUrlQuery } from 'querystring'
import type { Post } from 'types/Post'

import type { JSX } from 'react'

async function getPost(slug: string): Promise<Post> {
  const post = await getPostBySlug(slug)

  return post
}

interface Params extends ParsedUrlQuery {
  slug: string
}

interface PostPageProps {
  params: Promise<Params>
}

export default async function PostPage(
  props: PostPageProps
): Promise<JSX.Element> {
  const params = await props.params
  const { slug } = params
  const { content, metadata } = await getPost(slug)
  const commentsBoxShortname = process.env.REACT_APP_DISQUS_SHORTNAME as string
  return <ClientArticle {...{ content, metadata, commentsBoxShortname }} />
}

export function generateStaticParams(): GetAllPostsSlug[] {
  return getAllPostsSlug()
}
