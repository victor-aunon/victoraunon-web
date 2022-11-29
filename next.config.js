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
}

module.exports = nextConfig
