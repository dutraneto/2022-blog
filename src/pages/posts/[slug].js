import Head from 'next/head'
import Layout from 'components/Layout'
import Post from 'components/Post'

import { getPostBySlug, getAllPosts } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'

export default function PostPage(props) {
  return (
    <Layout>
      <Head>
        <title>{props.frontmatter.title}</title>
      </Head>
      <Post post={props} />
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
  const content = await markdownToHtml(post.content || '')
  return {
    props: {
      ...post,
      content
    }
  }
}
