import { getPostBySlug, getAllPostsSlug, GetAllPostsSlug } from 'lib/mdx'
import { Post } from 'interfaces/Post'
import MDContent from 'components/MDContent'
import PostTags from 'components/PostTags'
import CommentsBox from 'components/CommentsBox'
import { ParsedUrlQuery } from 'querystring'

async function getPost(slug: string): Promise<Post> {
  const post = await getPostBySlug(slug)

  return post
}

interface Params extends ParsedUrlQuery {
  slug: string
}

interface PostProps {
  params: Params
}

export default async function PostPage({
  params,
}: PostProps): Promise<JSX.Element> {
  const { slug } = params
  const { content, metadata } = await getPost(slug)
  return (
    <article>
      <p>{metadata.title}</p>
      <MDContent content={content} />
      <PostTags tags={metadata.tags} />
      <CommentsBox
        slug={slug}
        title={metadata.title}
        shortname={process.env.REACT_APP_DISQUS_SHORTNAME as string}
      />
    </article>
  )
}

export function generateStaticParams(): GetAllPostsSlug[] {
  return getAllPostsSlug()
}
