import Head from 'next/head'
import Layout from 'components/Layout'
import Post from 'components/Post'

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function PostPage({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Post postData={postData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
