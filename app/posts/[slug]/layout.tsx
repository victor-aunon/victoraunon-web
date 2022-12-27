import { ReactNode } from 'react'
import { getPostMetadataBySlug } from 'lib/mdx'
import nextConfig from 'next.config'
import { ParsedUrlQuery } from 'querystring'
import { SiteConfig } from 'interfaces/SiteConfig'
// import ReadProgressBar from 'components/ReadProgressBar'

interface Params extends ParsedUrlQuery {
  slug: string
}

interface LayoutPostProps {
  params: Params
  children: ReactNode
}

export default function Layout({
  children,
  params,
}: LayoutPostProps): JSX.Element {
  const { website } = nextConfig.siteConfig as SiteConfig
  const { title, imageUrl, author, date } = getPostMetadataBySlug(params.slug)
  return (
    <>
      {/* <!-- Article rich snippet --> */}
      <script
        type="application/ld+json"
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
      ></script>
      <section>
        {/* <ReadProgressBar /> */}
        {children}
      </section>
    </>
  )
}
