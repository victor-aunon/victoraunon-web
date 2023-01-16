'use client'

import { useState } from 'react'
import ResumeItem from 'components/ResumeItem'
import styles from 'styles/ResumeList.module.scss'
import { ResumeItemProps } from 'interfaces/ResumeItem'

interface ResumeListProps {
  resumeItems: ResumeItemProps[]
}

export default function ResumeList({
  resumeItems,
}: ResumeListProps): JSX.Element {
  const [filterCriterion, setFilterCriterion] = useState('older')

  function handleSelectChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setFilterCriterion(event.target.value)
  }

  return (
    <>
      <div className={styles.filterSelect}>
        <label htmlFor="sort-resume-items">Filtrar elementos</label>
        <select
          name="sort-resume-items"
          id="sort-resume-items"
          onChange={handleSelectChange}
        >
          <option value="older">Antiguos primero</option>
          <option value="newer">Actuales primero</option>
        </select>
      </div>
      {resumeItems
        .sort((item1, item2) => {
          if (filterCriterion === 'newer')
            return item1.year > item2.year ? -1 : 1
          else return item1.year > item2.year ? 1 : -1
        })
        .map((item: ResumeItemProps) => (
          <ResumeItem
            key={item.title}
            title={item.title}
            description={item.description}
            year={item.year}
            images={item.images}
            imagesBlur={item.imagesBlur}
            objectives={item?.objectives}
            links={item?.links}
          />
        ))}
    </>
  )
}
