'use client'

import { useContext, useState, type JSX } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { QueryContext } from 'contexts/QueryContext'
import { Search, X } from 'lucide-react'
import { Input } from 'components/ui/input'

interface SearchBarProps {
  parent: 'sideBar' | 'main'
}

export default function SearchBar({ parent }: SearchBarProps): JSX.Element {
  // If the parent is main, the searchBar is visible on mobile.
  // If the parent is sideBar, it's visible inside the sidebar on tablets+.

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (path !== '/posts') router.push('/')
  }

  const containerClass =
    parent === 'main'
      ? 'flex items-center gap-2 w-full md:hidden'
      : 'flex items-center gap-2 w-full hidden md:flex'

  return (
    <div className={containerClass}>
      <form onSubmit={handleSubmit} className="relative flex-1">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
          size={16}
        />
        <Input
          type="search"
          placeholder="Buscar posts"
          value={search}
          onChange={handleChange}
          className="pl-9 bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-600"
        />
      </form>
    </div>
  )
}
