'use client'

import { useContext, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { QueryContext } from 'contexts/QueryContext'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  parent: 'sideBar' | 'main'
}

export default function SearchBar({ parent }: SearchBarProps): JSX.Element {
  // If the parent is main, then the searchBar will be visible in mobile
  // devices. Otherwise, if the parent is sideBar, it will be visible inside
  // the sideBar in tablets and bigger devices

  const router = useRouter()
  const path = usePathname()
  const [search, setSearch] = useState('')
  const [queryTimeout, setQueryTimeout] = useState(setTimeout(() => {}))
  const { setQuery } = useContext(QueryContext)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const searchValue = e.target.value.toLowerCase()
    setSearch(searchValue)
    clearTimeout(queryTimeout)
    const newQueryTimeout = setTimeout(() => setQuery(searchValue), 500)
    setQueryTimeout(newQueryTimeout)
  }

  function clearSearch(): void {
    setSearch('')
    setQuery('')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (path !== '/posts') router.push('/')
  }

  return (
    <div
      className={
        parent === 'main' ? styles.searchBarOnMain : styles.searchBarOnSideBar
      }
    >
      <form onSubmit={handleSubmit}>
        <input
          type={'search'}
          placeholder="Buscar posts"
          className={styles.searchBarInput}
          value={search}
          onChange={handleChange}
        />
      </form>
      <button className={styles.searchBarDeleteButton} onClick={clearSearch}>
        <IoIosCloseCircleOutline />
      </button>
    </div>
  )
}
