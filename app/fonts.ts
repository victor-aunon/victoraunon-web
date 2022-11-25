import { Exo, Red_Hat_Display } from '@next/font/google'

export const titlesFont = Exo({
  weight: ['400', '600'],
  subsets: ['latin-ext'],
  style: ['normal'],
  fallback: ['arial', 'sans-serif'],
  variable: '--titles-font',
})

export const contentFont = Red_Hat_Display({
  weight: ['400', '600'],
  subsets: ['latin-ext'],
  style: ['normal'],
  fallback: ['helvetica', 'sans-serif'],
  variable: '--content-font',
})
