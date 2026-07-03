import './globals.css'
import Script from 'next/script'
import { getAllPostsMetadata } from 'lib/mdx'
import Providers from './Providers'
import { openSans } from './fonts'
import { CookieBanner } from 'components/Cookies'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SearchBar } from 'components/SearchBar'
import { SideBar } from 'components/SideBar'
import { Social } from 'components/Social'
import { commonMetadata, siteConfig } from './commonMetadata'
import type { LayoutProps } from 'types/Layout'

import type { JSX } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = commonMetadata

export default async function RootLayout({
  children,
}: LayoutProps): Promise<JSX.Element> {
  const allPosts = await getAllPostsMetadata()
  const { siteImage, website } = siteConfig

  return (
    <html lang="en" className={`dark ${openSans.variable}`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@1&amp;display=swap"
          rel="stylesheet"
        />
        {/* Meta tags that are not available in Next metadata */}
        <meta httpEquiv="X-UA-Compatible, refresh" content="IE=edge" />
        {/* <!-- Google business logo snippet --> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://${website}",
          "logo": "${siteImage}"
        }`,
          }}
        ></script>
        <Script
          id="gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });

              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtagfun':
              gtag});w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${
                process.env.REACT_APP_GOOGLE_TAG_ID as string
              }');
            `,
          }}
        />
      </head>
      <Providers>
        <body
          className={`flex flex-col gap-6 min-h-svh w-[90%] max-w-[1500px] mx-auto bg-zinc-950 text-zinc-100`}
        >
          <Header />
          <SearchBar parent="main" />
          <main className="flex flex-col lg:flex-row gap-6">
            <Social parent="main" />
            <section className="flex-1">{children}</section>
            <SideBar allPosts={allPosts} />
          </main>
          <Footer />
          <CookieBanner />
        </body>
      </Providers>
    </html>
  )
}
