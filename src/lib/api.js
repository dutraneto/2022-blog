import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'
import { translatedDate } from './utils'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostBySlug(slug) {
  if (!slug) return null

  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const date = translatedDate(data.language, data.date)

  return {
    slug: realSlug,
    date: data.date.toString(),
    frontmatter: { ...data, date },
    content
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )

  return posts
}
