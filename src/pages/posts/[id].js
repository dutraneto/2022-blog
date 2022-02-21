import Layout from 'components/Layout'
import * as S from 'components/Post/styles'

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <S.PostHeader>
        <S.PostDate color={postData.color}>
          {postData.date} &bull; min to read
        </S.PostDate>
        <S.PostTitle>{postData.title}</S.PostTitle>
        <S.PostDescription>{postData.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent color={postData.color}>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }}></div> */}
      </S.MainContent>
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
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
