import Layout from 'components/Layout'
import PostList from 'components/PostList'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Blog = ({ allPostsData }) => {
  return (
    <Layout>
      <PostList allPostsData={allPostsData} />
    </Layout>
  )
}

export default Blog
