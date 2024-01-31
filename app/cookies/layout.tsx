import {
  siteConfig,
  commonMetadata,
  commonMetaOpenGraph,
} from 'app/commonMetadata'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const { name, website } = siteConfig

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${name} - Política de Cookies`,
  alternates: {
    canonical: `https://${website}/cookies`,
  },
  robots: 'noindex, nofollow, noarchive',
  openGraph: {
    ...commonMetaOpenGraph,
    url: `https://${website}/cookies`,
    title: `${name} - Política de Cookies`,
  },
}

export default function Layout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return <>{children}</>
}
