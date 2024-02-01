import 'styles/globals.scss'
import Script from 'next/script'
import { getAllPostsMetadata } from 'lib/mdx'
import Providers from './Providers'
import BodyThemed from './BodyThemed'
import { CookieBanner } from 'components/Cookies'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SearchBar } from 'components/SearchBar'
import { SideBar } from 'components/SideBar'
import { Social } from 'components/Social'
import { commonMetadata, siteConfig } from './commonMetadata'
import type { LayoutProps } from 'types/Layout'

export const metadata = commonMetadata

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  const { siteImage, website } = siteConfig
  return (
    <html lang="en">
      <head>
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
        <BodyThemed>
          <Header />
          <SearchBar parent="main" />
          <main className="main">
            <Social parent="main" />
            <section className="content-section">{children}</section>
            <SideBar allPosts={getAllPostsMetadata()} />
          </main>
          <Footer />
          <CookieBanner />
        </BodyThemed>
      </Providers>
    </html>
  )
}
