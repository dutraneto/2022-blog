import { remark } from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).use(slug).process(markdown)

  return result.toString()
}
