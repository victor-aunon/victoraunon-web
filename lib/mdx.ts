import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import { Post, PostMetadata } from 'interfaces/Post'

const postsDir = path.join(process.cwd(), 'mdposts')

export interface GetAllPostsSlug {
  slug: PostMetadata['slug']
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDir, `${slug}.mdx`)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContent)
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  })

  return {
    content: source,
    metadata: {
      slug,
      title: data.title ?? slug,
      author: data.author ?? 'Víctor Auñón',
      excerpt: data.excerpt ?? '',
      description: data.description ?? '',
      tags: (data.tags ?? []).sort(),
      date: data.date,
      readTime: parseInt(data.readTime),
      imageUrl: data.imageUrl,
      imageBlurUrl: data.imageBlurUrl,
      videoUrl: data.videoUrl,
    },
  }
}

export function getPostMetadataBySlug(slug: string): PostMetadata {
  const fullPath = path.join(postsDir, `${slug}.mdx`)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const { data } = matter(fileContent)
  return {
    slug,
    title: data.title ?? slug,
    author: data.author ?? 'Víctor Auñón',
    excerpt: data.excerpt ?? '',
    description: data.description ?? data.excerpt ?? '',
    tags: (data.tags ?? []).sort(),
    date: data.date,
    readTime: parseInt(data.readTime),
    imageUrl: data.imageUrl,
    imageBlurUrl: data.imageBlurUrl,
    videoUrl: data.videoUrl,
  }
}

export function getAllPostsMetadata(): PostMetadata[] {
  const postFiles = fs.readdirSync(postsDir)
  return postFiles
    .filter((file) => file.match(/.mdx$/))
    .map((postName) => getPostMetadataBySlug(postName.replace(/\.mdx/g, '')))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getAllPostsSlug(): GetAllPostsSlug[] {
  const postFiles = fs.readdirSync(postsDir)
  return postFiles
    .filter((file) => file.match(/.mdx$/))
    .map((post) => {
      return {
        slug: post.replace('.mdx', ''),
      }
    })
}
