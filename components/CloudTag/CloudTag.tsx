import Link from 'next/link'
import type { PostMetadata } from 'types/Post'
import { Badge } from 'components/ui/badge'

import type { JSX } from 'react'

interface TagsMap {
  [key: string]: number
}

interface CloudTagProps {
  posts: PostMetadata[]
}

export default function CloudTag({ posts }: CloudTagProps): JSX.Element {
  // Calculate the number of occurrences of each tag across all posts
  const tags = posts.reduce<TagsMap>((tagsMap, post) => {
    post.tags.forEach((tag) => {
      tagsMap[tag] = (tagsMap[tag] ?? 0) + 1
    })
    return tagsMap
  }, {})

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold text-zinc-100 mb-3">
        Tags populares
      </h2>
      <div className="flex flex-wrap gap-2 mt-4">
        {/* Sort tags by frequency, take the top 20 */}
        {Object.entries(tags)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 20)
          .map(([tagName]) => (
            <Link key={tagName} href={`/posts?tag=${tagName}`}>
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-zinc-600 transition-colors text-zinc-200"
              >
                {tagName}
              </Badge>
            </Link>
          ))}
      </div>
    </div>
  )
}
