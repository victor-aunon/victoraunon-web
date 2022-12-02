'use client'

import styles from 'styles/SideBar.module.scss'
import { useContext, useEffect } from 'react'
import { PostsContext } from 'contexts/PostsContext'
import { PostMetadata } from 'interfaces/Post'
import SearchBar from './SearchBar'
import CloudTag from './CloudTag'

interface SideBarProps {
  allPosts: PostMetadata[]
}

export default function SideBar({ allPosts }: SideBarProps): JSX.Element {
  const { setPosts } = useContext(PostsContext)

  useEffect(() => {
    setPosts(allPosts)
  }, [])

  return (
    <aside className={styles.sideBar}>
      <SearchBar parent={'sideBar'} />
      <CloudTag />
    </aside>
  )
}
