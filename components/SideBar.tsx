import styles from 'styles/SideBar.module.scss'
import { PostMetadata } from 'interfaces/Post'
import SearchBar from './SearchBar'
import CloudTag from './CloudTag'

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
