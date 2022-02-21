import Head from 'next/head'
import Layout from 'components/Layout'
import * as S from 'components/Post/styles'

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <S.PostHeader>
        <S.PostDate color={postData.color}>
          {postData.date} &bull; min to read
        </S.PostDate>
        <S.PostTitle>{postData.title}</S.PostTitle>
        <S.PostDescription>{postData.description}</S.PostDescription>
      </S.PostHeader>
      <S.PostWrapper color={postData.color}>
        <S.PostBody
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></S.PostBody>
      </S.PostWrapper>
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
