import type { Metadata } from 'next'
import type { SiteConfig } from 'types/SiteConfig'

export const siteConfig: SiteConfig = {
  name: 'Víctor Auñón',
  website: 'victoraunon.com',
  cif: '53607525-E',
  address: 'C/ San Valeriano 27B, bajo A, CP 46900 Torrent, València',
  holder: 'Angel Auñón García',
  email: 'hola@victoraunon.com',
  siteImage: 'https://github.com/victor-aunon.png?size=200',
}

export const commonMetaOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: '',
  url: `https://${siteConfig.website}`,
  title: siteConfig.name,
  images: [{ url: siteConfig.siteImage, width: 200, height: 200 }],
  locale: 'es_ES',
  siteName: `https://${siteConfig.website}`,
}

export const commonMetadata: Metadata = {
  title: siteConfig.name,
  alternates: {
    canonical: `https://${siteConfig.website}`,
  },
  description: '',
  robots: 'index, follow',
  creator: siteConfig.name,
  publisher: siteConfig.name,
  manifest: '/images/favicon/site.webmanifest',
  icons: {
    icon: [
      {
        sizes: '32x32',
        type: 'image/png',
        url: '/images/favicon/favicon-32x32.png',
      },
      {
        sizes: '16x16',
        type: 'image/png',
        url: '/images/favicon/favicon-16x16.png',
      },
    ],
    apple: [{ sizes: '180x180', url: '/images/favicon/apple-touch-icon.png' }],
    shortcut: ['/images/favicon/favicon.ico'],
  },
  other: {
    'msapplication-TileColor': '#603cba',
    'msapplication-config': '/images/favicon/browserconfig.xml',
  },
  openGraph: commonMetaOpenGraph,
}
