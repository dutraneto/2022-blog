import Head from 'next/head'
import Layout from 'components/Layout'
import BlogPost from 'templates/blog-post'

import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'

import { getPostBySlug, getAllPosts } from 'lib/api'

export default function Post(props) {
  return (
    <Layout>
      <Head>
        <title>{props.frontmatter.title}</title>
      </Head>
      <BlogPost post={props} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const post = getPostBySlug(slug)
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight
      ]
    }
  })
  return {
    props: {
      ...post,
      mdxSource
    }
  }
}
