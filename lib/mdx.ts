import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/atom-one-dark.css'
// Import all common languages for syntax highlighting
import 'highlight.js/lib/common'
import { Post, PostMetadata } from 'types/Post'

const postsDir = path.join(process.cwd(), 'mdposts')

interface ProcessedPost {
  rawContent: string
  metadata: Post['metadata']
}

async function processPost(slug: string): Promise<ProcessedPost> {
  const fullPath = path.join(postsDir, `${slug}.mdx`)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContent)

  // Estimate reading time
  const cleanContent = content
    .replace(/^import\s.+/gm, '')
    .replace(/^export\s.+/gm, '')
    .replace(/<\/?[A-Za-z0-9]+(?=\s|>).*?\/?>/g, '')

  const stats = readingTime(cleanContent)
  const readTime = Math.ceil(stats.minutes)

  // Create blur image placeholder
  let finalImageBlurURL = data.imageBlurUrl

  if (data.imageUrl && !finalImageBlurURL) {
    // Avoid Vercel error on build
    if (process.env.VERCEL) finalImageBlurURL = data.imageUrl
    else {
      const { default: sharp } = await import('sharp')
      const publicDir = path.join(process.cwd(), 'public')
      const sourceImagePath = path.join(publicDir, data.imageUrl)
      if (fs.existsSync(sourceImagePath)) {
        try {
          const buffer = await sharp(sourceImagePath)
            .resize(20)
            .blur(5)
            .toBuffer()

          finalImageBlurURL = `data:image/jpeg;base64,${buffer.toString(
            'base64'
          )}`
        } catch (error) {
          console.error(`Error processing blur for post ${slug}`, error)
        }
      }
    }
  }

  return {
    rawContent: content,
    metadata: {
      slug,
      title: data.title ?? slug,
      author: data.author ?? 'Víctor Auñón',
      excerpt: data.excerpt ?? '',
      description: data.description ?? '',
      tags: (data.tags ?? []).sort(),
      date: data.date,
      readTime,
      imageUrl: data.imageUrl,
      imageBlurUrl: finalImageBlurURL,
      videoUrl: data.videoUrl,
    },
  }
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { rawContent, metadata } = await processPost(slug)
  const content = await serialize(rawContent, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  })

  return { content, metadata }
}

export async function getPostMetadataBySlug(
  slug: string
): Promise<PostMetadata> {
  const { metadata } = await processPost(slug)
  return { ...metadata }
}

export async function getAllPostsMetadata(): Promise<PostMetadata[]> {
  const postFiles = fs.readdirSync(postsDir)
  const postsMetaDatas = await Promise.all(
    postFiles
      .filter((file) => file.match(/.mdx$/))
      .map((postName) => getPostMetadataBySlug(postName.replace(/\.mdx/g, '')))
  )

  return postsMetaDatas.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  )
}

export interface GetAllPostsSlug {
  slug: PostMetadata['slug']
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
