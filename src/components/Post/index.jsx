import { useEffect } from 'react'
import * as S from './styles'
import Prism from 'prismjs'
import { formatAllDateText } from '../../lib/utils'

const Post = ({ postData }) => {
  useEffect(() => {
    console.log('I have been fired')
    Prism.manual = true
    Prism.highlightAll()
  }, [postData])
  return (
    <>
      <S.PostHeader>
        <S.PostDate color={postData.color}>
          {formatAllDateText(
            postData.language,
            postData.date,
            postData.contentHtml
          )}
        </S.PostDate>
        <S.PostTitle>{postData.title}</S.PostTitle>
        <S.PostDescription>{postData.description}</S.PostDescription>
      </S.PostHeader>
      <S.PostWrapper color={postData.color}>
        <S.PostBody
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </S.PostWrapper>
    </>
  )
}

export default Post
