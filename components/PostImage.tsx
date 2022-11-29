import Image from 'next/image'

interface PostImageProps {
  imageURL: string
  imageAlt: string
  blurImageURL: string
}

const postImageDivStyles: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  height: '400px',
  maxHeight: '600px',
  margin: '2rem 0rem',
}

export default function PostImage({
  imageAlt,
  imageURL,
  blurImageURL,
}: PostImageProps): JSX.Element {
  return (
    <div style={postImageDivStyles}>
      <Image
        src={imageURL}
        alt={imageAlt}
        fill={true}
        placeholder="blur"
        blurDataURL={blurImageURL}
        style={{ objectFit: 'contain' }}
      ></Image>
    </div>
  )
}
