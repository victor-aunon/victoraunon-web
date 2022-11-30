import styles from 'styles/SideBar.module.scss'
import SearchBar from './SearchBar'

export default function SideBar(): JSX.Element {
  return (
    <aside className={styles.sideBar}>
      <SearchBar parent={'sideBar'} />
    </aside>
  )
}
