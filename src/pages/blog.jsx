import Layout from 'components/Layout'
import Post from 'components/Post'

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
      <Post allPostsData={allPostsData} />
    </Layout>
  )
}

export default Blog
