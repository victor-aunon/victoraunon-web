'use client'

import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import { ThemeContext } from 'contexts/ThemeContext'

interface IMDContentProps {
  content: MDXRemoteProps
}

export default function MDContent({ content }: IMDContentProps): JSX.Element {
  const { setTheme } = useContext(ThemeContext)

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <>
      <Link href={'/'}>Inicio</Link>
      <MDXRemote {...content} />
    </>
  )
}
