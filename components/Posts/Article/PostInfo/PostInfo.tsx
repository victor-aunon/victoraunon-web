import { FiClock } from 'react-icons/fi'
import type { PostMetadata } from 'types/Post'

import type { JSX } from 'react'

interface PostInfoProps {
  author: PostMetadata['author']
  date: PostMetadata['date']
  readTime: PostMetadata['readTime']
}
export default function PostInfo(props: PostInfoProps): JSX.Element {
  const { author, date, readTime } = props
  const postedDate = Intl.DateTimeFormat('es', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Europe/Madrid',
  }).format(new Date(date))

  return (
    <div className="flex flex-row justify-between items-baseline gap-1 mt-4 mb-2 text-zinc-400 px-1 py-1 rounded-lg shadow-sm">
      <span className="flex flex-row items-center gap-1 text-2xl">
        <FiClock />
        {readTime}&apos;
      </span>
      <div>
        <span>{`Publicado el ${postedDate}  `}</span>
        <span>{`por ${author}`}</span>
      </div>
    </div>
  )
}
