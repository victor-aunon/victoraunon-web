import nextConfig from 'next.config'
import { getPostMetadataBySlug } from 'lib/mdx'
import { SiteConfig } from 'interfaces/SiteConfig'
import { ParsedUrlQuery } from 'querystring'
import CommonHead from 'app/CommonHead'

interface Params extends ParsedUrlQuery {
  slug: string
}

interface HeadProps {
  params: Params
}

export default function Head({ params }: HeadProps): JSX.Element {
  const { name, website, siteImage } = nextConfig.siteConfig as SiteConfig
  const { slug } = params
  const { title, imageUrl, description, author, tags, date, videoUrl } =
    getPostMetadataBySlug(slug)
  return (
    <>
      <CommonHead />
      <title>{`${name} - ${title}`}</title>
      <link rel="canonical" href={`https://${website}/posts/${slug}`} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      {/* OPEN GRAPH */}
      <meta property="og:type" content="article" />
      <meta property="og:article:author:username" content={author} />
      {tags.map((tag) => (
        <meta key={tag} property="og:article:tag" content={tag} />
      ))}
      <meta
        property="og:article:published_time"
        content={new Date(date).toISOString()}
      />
      <meta property="og:url" content={`https://${website}/posts/${slug}`} />
      <meta property="og:title" content={`${name} - ${title}`} />
      <meta
        property="og:image"
        content={
          imageUrl !== undefined ? `https://${website}${imageUrl}` : siteImage
        }
      />
      {videoUrl !== undefined && (
        <meta property="og:video" content={videoUrl} />
      )}
      <meta property="og:locale" content="es_ES" />
    </>
  )
}
