import Layout from 'components/Layout'
import BlogList from 'templates/blog-list'

import { getAllPosts } from 'lib/api'

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts
    }
  }
}

const Blog = ({ posts }) => {
  let noPosts = 'There are no Posts...'
  if (!posts) return noPosts
  return (
    <Layout>
      <BlogList posts={posts} />
    </Layout>
  )
}

export default Blog
