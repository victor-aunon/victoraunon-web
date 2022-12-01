import nextConfig from 'next.config'
import { SiteConfig } from 'interfaces/SiteConfig'

export default function DefaultHead(): JSX.Element {
  const { website, name, siteImage } = nextConfig.siteConfig as SiteConfig
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible, refresh" content="IE=edge" />
      <title>{name}</title>
      <link rel="canonical" href={`https://${website}`} />
      <meta name="robots" content="index, follow" />
      <meta name="description" content="" />
      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://${website}`} />
      <meta property="og:title" content={name} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:locale" content="es_ES" />
    </>
  )
}
