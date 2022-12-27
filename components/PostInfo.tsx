import { FiClock } from 'react-icons/fi'
import styles from 'styles/PostInfo.module.scss'
import { PostMetadata } from 'interfaces/Post'

interface PostInfoProps {
  author: PostMetadata['author']
  date: PostMetadata['date']
  readTime: PostMetadata['readTime']
}
export default function PostInfo(props: PostInfoProps): JSX.Element {
  const { author, date, readTime } = props
  const postedDate = Intl.DateTimeFormat('es', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Europe/Madrid',
  }).format(new Date(date))

  return (
    <div className={styles.postInfo}>
      <span>{`Publicado el ${postedDate}`}</span>
      <span>{`por ${author}`}</span>
      <span className={styles.readTime}>
        <FiClock />
        {readTime}&apos;
      </span>
    </div>
  )
}
