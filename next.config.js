/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Use app router based on file system folders and page.tsx files
  experimental: { appDir: true },
  // TODO
  // i18n: {
  //   locales: ['es', 'en'],
  //   defaultLocale: 'en',
  //   localeDetection: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  siteConfig: {
    name: 'Víctor Auñón',
    website: 'victoraunon.com',
    cif: '53607525-E',
    address: 'C/ San Valeriano 27B, bajo A, CP 46900 Torrent, València',
    holder: 'Angel Auñón García',
    email: 'hola@victoraunon.com',
    siteImage: 'https://github.com/victor-aunon.png?size=200',
  },
}

module.exports = nextConfig
