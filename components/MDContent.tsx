'use client'

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import CodeFrame from './CodeFrame'
import PostImage from './PostImage'

interface MDContentProps {
  content: MDXRemoteProps
}

export default function MDContent({ content }: MDContentProps): JSX.Element {
  return (
    <>
      <MDXRemote {...content} components={{ CodeFrame, PostImage }} />
    </>
  )
}
