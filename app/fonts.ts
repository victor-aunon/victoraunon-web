import { Open_Sans } from 'next/font/google'

export const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  variable: '--font-open-sans',
  display: 'swap',
})
