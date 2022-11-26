import styles from 'styles/Social.module.scss'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

import ThemeSelector from 'components/ThemeSelector'

interface SocialProps {
  parent: 'navbar' | 'main'
}

export default function Social({ parent }: SocialProps): JSX.Element {
  if (parent === 'main')
    return (
      <aside className={styles.socialOnMain}>
        <ThemeSelector parent={parent} />
        <FaLinkedin />
        <FaInstagram />
      </aside>
    )
  return (
    <div className={styles.socialOnNav}>
      <ThemeSelector parent={parent} />
      <FaLinkedin />
      <FaInstagram />
    </div>
  )
}
