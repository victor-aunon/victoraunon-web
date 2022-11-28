'use client'

import { useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from 'contexts/ThemeContext'
import styles from 'styles/ThemeSelector.module.scss'

interface ThemeSelectorProps {
  parent: 'navbar' | 'main'
}

export default function ThemeSelector({
  parent,
}: ThemeSelectorProps): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleChange = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    // // Save the theme setting to local storage
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      className={
        parent === 'main'
          ? styles.buttonSelectorOnMain
          : styles.buttonSelectorOnNav
      }
      onClick={handleChange}
      data-theme={
        theme === 'dark' ? 'Cambia a modo claro' : 'Cambia a modo oscuro'
      }
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
