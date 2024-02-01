import { getPostBySlug, getAllPostsSlug, GetAllPostsSlug } from 'lib/mdx'
import { Article } from 'components/Posts/Article'
import type { ParsedUrlQuery } from 'querystring'
import type { Post } from 'types/Post'

async function getPost(slug: string): Promise<Post> {
  const post = await getPostBySlug(slug)

  return post
}

interface Params extends ParsedUrlQuery {
  slug: string
}

interface PostPageProps {
  params: Params
}

export default async function PostPage({
  params,
}: PostPageProps): Promise<JSX.Element> {
  const { slug } = params
  const { content, metadata } = await getPost(slug)
  const commentsBoxShortname = process.env.REACT_APP_DISQUS_SHORTNAME as string
  return <Article {...{ content, metadata, commentsBoxShortname }} />
}

export function generateStaticParams(): GetAllPostsSlug[] {
  return getAllPostsSlug()
}
