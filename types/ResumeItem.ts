interface InterestingLink {
  name: string
  href: string
}

export interface ResumeItemProps {
  title: string
  images: string[]
  imagesBlur: string[]
  year: number
  description: string
  objectives?: string[]
  links?: InterestingLink[]
}
