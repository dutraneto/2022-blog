import Layout from 'components/Layout'
import PostList from 'components/PostList'

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
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export default Blog
