import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import * as S from './styles'
import { formatAllDateText } from 'lib/utils'

const Post = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [post])
  return (
    <>
      <S.PostHeader>
        <S.PostDate color={post.frontmatter.color}>
          {formatAllDateText(
            post.frontmatter.language,
            post.frontmatter.date,
            post.content
          )}
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.PostWrapper color={post.frontmatter.color}>
        <S.PostBody dangerouslySetInnerHTML={{ __html: post.content }} />
      </S.PostWrapper>
    </>
  )
}

export default Post
