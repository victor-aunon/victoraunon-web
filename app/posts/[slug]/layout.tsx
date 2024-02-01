import { ReactNode } from 'react'
import Script from 'next/script'
import { getPostMetadataBySlug } from 'lib/mdx'
import { ParsedUrlQuery } from 'querystring'
import {
  siteConfig,
  commonMetadata,
  commonMetaOpenGraph,
} from 'app/commonMetadata'
import type { Metadata } from 'next'

const { website, name, siteImage } = siteConfig

interface Params extends ParsedUrlQuery {
  slug: string
}

interface LayoutPostProps {
  params: Params
  children: ReactNode
}

export async function generateMetadata({
  params,
}: LayoutPostProps): Promise<Metadata> {
  const { slug } = params
  const { title, imageUrl, description, author, tags, date, videoUrl } =
    getPostMetadataBySlug(slug)

  const metadata: Metadata = {
    ...commonMetadata,
    title: `${name} - ${title}`,
    alternates: {
      canonical: `https://${website}/posts/${slug}`,
    },
    description,
    openGraph: {
      ...commonMetaOpenGraph,
      type: 'article',
      title: `${name} - ${title}`,
      url: `https://${website}/posts/${slug}`,
      authors: [author],
      publishedTime: new Date(date).toISOString(),
      description,
      tags,
      images: [
        { url: !imageUrl ? siteImage : `https://${website}${imageUrl}` },
      ],
    },
  }

  if (videoUrl && metadata.openGraph)
    metadata.openGraph.videos = [{ url: videoUrl }]

  return metadata
}

export default function Layout({
  children,
  params,
}: LayoutPostProps): JSX.Element {
  const { title, imageUrl, author, date } = getPostMetadataBySlug(params.slug)
  return (
    <>
      {/* <!-- Article rich snippet --> */}
      <Script
        id="article-rich-snippet"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "${title}",
          ${
            imageUrl !== undefined
              ? `"image" : ["https://${website}${imageUrl}"],`
              : ''
          }
          "datePublished": "${new Date(date).toISOString()}",
          "author": [{
            "@type": "Person",
            "name": "${author}",
            "url" : "https://${website}/about"
          }]
        }`,
        }}
      />
      <section>{children}</section>
    </>
  )
}
