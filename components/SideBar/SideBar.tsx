import { CloudTag } from 'components/CloudTag'
import { SearchBar } from 'components/SearchBar'
import type { PostMetadata } from 'types/Post'
import styles from './SideBar.module.scss'

interface SideBarProps {
  allPosts: PostMetadata[]
}

export default function SideBar({ allPosts }: SideBarProps): JSX.Element {
  return (
    <aside className={styles.sideBar}>
      <SearchBar parent={'sideBar'} />
      <CloudTag posts={allPosts} />
    </aside>
  )
}
