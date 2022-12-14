'use client'

import { DiscussionEmbed } from 'disqus-react'

interface CommentsBoxProps {
  slug: string
  title: string
  shortname: string
}

export default function CommentsBox({
  slug,
  title,
  shortname,
}: CommentsBoxProps): JSX.Element {
  return (
    <section style={{ marginTop: '2rem' }}>
      <DiscussionEmbed
        shortname={shortname}
        config={{
          url: `https://victoraunon.com/posts/${slug}`,
          identifier: slug.replaceAll('-', '_'),
          title,
          language: 'es_ES',
        }}
      />
    </section>
  )
}
