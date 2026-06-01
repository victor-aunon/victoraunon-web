import { CloudTag } from 'components/CloudTag'
import { SearchBar } from 'components/SearchBar'
import type { PostMetadata } from 'types/Post'

import type { JSX } from 'react'

interface SideBarProps {
  allPosts: PostMetadata[]
}

export default function SideBar({ allPosts }: SideBarProps): JSX.Element {
  return (
    <aside className="hidden md:flex flex-col gap-2 lg:gap-6 w-full lg:w-64 shrink-0 sticky top-40 self-start max-h-[calc(100vh-10rem)] overflow-y-auto py-4 px-2">
      <SearchBar parent="sideBar" />
      <CloudTag posts={allPosts} />
    </aside>
  )
}
