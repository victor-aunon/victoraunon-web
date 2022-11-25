'use client'

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'

interface IMDContentProps {
  content: MDXRemoteProps
}

export default function MDContent({ content }: IMDContentProps): JSX.Element {
  return <MDXRemote {...content} />
}
