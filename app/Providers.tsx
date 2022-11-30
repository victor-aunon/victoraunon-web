'use client'

import { useEffect, useState } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'
import { PostsContext } from 'contexts/PostsContext'
import { LayoutProps } from 'interfaces/Layout'
import { PostMetadata } from 'interfaces/Post'
// import usePosts from 'hooks/usePosts'

export default function Providers({ children }: LayoutProps): JSX.Element {
  const [theme, setTheme] = useState('dark')
  const [posts, setPosts] = useState<PostMetadata[]>([])
  const [query, setQuery] = useState('')

  function getDefaultTheme(): string {
    let isBrowserDark = true
    let localStorageTheme: string | null = null
    if (typeof window !== 'undefined') {
      // Detect if the system default mode is dark or not
      isBrowserDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      // Get theme value from local storage
      localStorageTheme = localStorage.getItem('theme')
    }
    const browserDefaultTheme = isBrowserDark ? 'dark' : 'light'
    return localStorageTheme ?? browserDefaultTheme
  }

  useEffect(() => {
    setTheme(getDefaultTheme())
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <PostsContext.Provider value={{ posts, setPosts, query, setQuery }}>
        {children}
      </PostsContext.Provider>
    </ThemeContext.Provider>
  )
}
