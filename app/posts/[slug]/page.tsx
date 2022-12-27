import { getPostBySlug, getAllPostsSlug, GetAllPostsSlug } from 'lib/mdx'
import { Post } from 'interfaces/Post'
import Article from 'components/Article'
import { ParsedUrlQuery } from 'querystring'

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
