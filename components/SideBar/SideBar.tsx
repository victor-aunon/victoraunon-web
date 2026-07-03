import { CloudTag } from 'components/CloudTag'
import { SearchBar } from 'components/SearchBar'
import type { PostMetadata } from 'types/Post'

import type { JSX } from 'react'

interface SideBarProps {
  allPosts: PostMetadata[]
}

export default function SideBar({ allPosts }: SideBarProps): JSX.Element {
  return (
    <aside className="flex flex-col gap-2 lg:gap-6 w-full lg:w-64 shrink-0 sticky top-30 self-start max-h-[calc(100vh-10rem)] overflow-y-auto px-2">
      <SearchBar parent="sideBar" className="mt-0.5" />
      <CloudTag posts={allPosts} />
    </aside>
  )
}
