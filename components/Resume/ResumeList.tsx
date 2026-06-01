'use client'

import { useState, type JSX } from 'react'
import { ResumeItem } from 'components/Resume'
import type { ResumeItemProps } from 'types/ResumeItem'

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
      <div className="flex flex-row justify-end gap-4 my-6 font-semibold text-lg text-zinc-400">
        <label htmlFor="sort-resume-items">Filtrar elementos</label>
        <select
          name="sort-resume-items"
          id="sort-resume-items"
          onChange={handleSelectChange}
          className="bg-zinc-900 border border-zinc-600 rounded px-2 py-1 text-zinc-200"
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
