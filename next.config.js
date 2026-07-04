/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    viewTransition: true,
  },
  turbopack: {
    root: __dirname,
  },
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
  serverExternalPackages: ['sharp'],
}

module.exports = nextConfig
