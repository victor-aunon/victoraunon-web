'use client'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from './PostDate'
import FallbackCover from './FallbackCover'
import type { PostMetadata } from 'types/Post'
import { Card, CardContent } from 'components/ui/card'

import type { JSX } from 'react'

export default function PostCardSimple(postInfo: PostMetadata): JSX.Element {
  return (
    <li className="list-none">
      <Link href={`/posts/${postInfo.slug}`} className="block group h-full">
        <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition-colors flex flex-row items-stretch">
          {/* Cover image or fallback grain SVG — compact for simple list view */}
          <div className="relative w-24 shrink-0 overflow-hidden">
            {postInfo.imageUrl !== undefined ? (
              <Image
                src={postInfo.imageUrl}
                alt={postInfo.slug}
                fill={true}
                style={{ objectFit: 'cover' }}
                {...(postInfo.imageBlurUrl
                  ? {
                      placeholder: 'blur',
                      blurDataURL: postInfo.imageBlurUrl,
                    }
                  : {})}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <FallbackCover
                seed={
                  (postInfo.slug
                    .split('')
                    .reduce((acc, c) => acc + c.charCodeAt(0), 0) %
                    100) +
                  1
                }
              />
            )}
          </div>

          <CardContent className="p-3 flex flex-col justify-center gap-1 flex-1 min-w-0">
            <h2 className="text-sm font-semibold text-zinc-100 leading-snug line-clamp-2 group-hover:text-white transition-colors">
              {postInfo.title}
            </h2>
            <div className="text-xs text-zinc-500">
              <PostDate date={postInfo.date} />
            </div>
          </CardContent>
        </Card>
      </Link>
    </li>
  )
}
