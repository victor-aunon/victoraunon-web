import nextConfig from 'next.config'
import { SiteConfig } from 'interfaces/SiteConfig'
import CommonHead from 'app/CommonHead'

export default function Head(): JSX.Element {
  const { name, website, siteImage } = nextConfig.siteConfig as SiteConfig
  return (
    <>
      <CommonHead />
      <title>{`${name} - Aviso legal`}</title>
      <link rel="canonical" href={`https://${website}/legal`} />
      <meta name="description" content="" />
      <meta name="robots" content="noindex, nofollow, noarchive" />
      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://${website}/legal`} />
      <meta property="og:title" content={`${name} - Aviso legal`} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:locale" content="es_ES" />
    </>
  )
}
