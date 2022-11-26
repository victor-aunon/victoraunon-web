import Link from 'next/link'
import { getAllPostsMetadata } from 'lib/mdx'
import PostDate from './PostDate'

export default function PostsList(): JSX.Element {
  return (
    <ul>
      {getAllPostsMetadata().map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.excerpt}</p>
          <p>{post.author}</p>
          <PostDate date={post.date.toString()} />
          <hr />
        </li>
      ))}
      {getAllPostsMetadata().map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.excerpt}</p>
          <p>{post.author}</p>
          <PostDate date={post.date.toString()} />
          <hr />
        </li>
      ))}
      {getAllPostsMetadata().map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.excerpt}</p>
          <p>{post.author}</p>
          <PostDate date={post.date.toString()} />
          <hr />
        </li>
      ))}
    </ul>
  )
}
