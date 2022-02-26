import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'
import * as S from 'styles/base'
import { formatAllDateText } from 'lib/utils'

const BlogPost = ({ post }) => {
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
        <S.PostBody
          dangerouslySetInnerHTML={{ __html: post.content }}
          color={post.frontmatter.color}
        />
      </S.PostWrapper>
    </>
  )
}

export default BlogPost
