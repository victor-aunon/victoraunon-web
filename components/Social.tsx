import styles from 'styles/Social.module.scss'
import { FaLinkedin, FaInstagram, FaArrowCircleUp } from 'react-icons/fa'

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
        <a
          href="#site-name"
          className={styles.goUpButton}
          data-go-up-text="Ir al principio"
        >
          <FaArrowCircleUp />
        </a>
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
