import Link from 'next/link'
import type { PostMetadata } from 'types/Post'
import { Badge } from 'components/ui/badge'

import type { JSX } from 'react'

interface PostTagsProps {
  tags: PostMetadata['tags']
}

export default function PostTags({ tags }: PostTagsProps): JSX.Element {
  return (
    <section className="mt-10 pt-8 border-t border-zinc-800">
      <h3 className="text-md font-semibold font-display tracking-tight text-zinc-400 mb-3">
        Tags relacionados:
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link key={`postTag-${tag}`} href={`/posts?tag=${tag}`}>
            <Badge
              variant="secondary"
              className="cursor-pointer hover:bg-zinc-600 transition-colors text-zinc-200"
            >
              {tag}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  )
}
