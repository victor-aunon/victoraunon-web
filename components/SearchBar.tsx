'use client'

import React, { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { PostsContext } from 'contexts/PostsContext'
import styles from 'styles/SearchBar.module.scss'
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface SearchBarProps {
  parent: 'sideBar' | 'main'
}

export default function SearchBar({ parent }: SearchBarProps): JSX.Element {
  // If the parent is main, then the searchbar will be visible in mobile
  // devices. Otherwise, if the parent is sideBar, it will be visible inside
  // the sideBar in tablets and bigger devices

  const router = useRouter()
  const [search, setSearch] = useState('')
  const { setQuery } = useContext(PostsContext)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const searchValue = e.target.value.toLowerCase()
    setSearch(searchValue)
    setTimeout(() => setQuery(searchValue), 800)
  }

  function clearSearch(): void {
    setSearch('')
    setQuery('')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    router.push('/')
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
