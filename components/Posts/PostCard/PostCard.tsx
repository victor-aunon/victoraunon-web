'use client'

import { useContext, type JSX, ViewTransition } from 'react'
import { QueryContext } from 'contexts/QueryContext'
import Image from 'next/image'
import Link from 'next/link'
import PostDate from './PostDate'
import FallbackCover from './FallbackCover'
import type { PostMetadata } from 'types/Post'
import { Card, CardContent } from 'components/ui/card'

export default function PostCard(postInfo: PostMetadata): JSX.Element {
  // QueryContext kept for any future query-dependent filtering at card level
  const { query: _query } = useContext(QueryContext)

  return (
    <li className="list-none">
      <Link href={`/posts/${postInfo.slug}`} className="block group h-full">
        <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition-colors">
          {/* Cover image or fallback grain SVG */}
          <ViewTransition name={`post-cover-${postInfo.slug}`}>
            <div className="relative w-full h-48 overflow-hidden">
              {postInfo.imageUrl !== undefined ? (
                <Image
                  src={postInfo.imageUrl}
                  alt={postInfo.slug}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  placeholder={
                    postInfo.imageBlurUrl === undefined ? undefined : 'blur'
                  }
                  blurDataURL={postInfo.imageBlurUrl}
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
          </ViewTransition>

          <CardContent className="p-4 flex flex-col gap-2">
            <h2 className="text-base font-semibold text-zinc-100 leading-snug line-clamp-2 group-hover:text-white transition-colors">
              {postInfo.title}
            </h2>
            <div className="text-xs text-zinc-500">
              <PostDate date={postInfo.date} />
            </div>
            <p className="text-sm text-zinc-400 line-clamp-3">
              {postInfo.excerpt}
            </p>
          </CardContent>
        </Card>
      </Link>
    </li>
  )
}
