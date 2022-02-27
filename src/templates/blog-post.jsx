import * as S from 'styles/base'
import { formatAllDateText } from 'lib/utils'
import { MDXRemote } from 'next-mdx-remote'
import { CodePenBlend, Picture } from 'components/PostFrames'

const BlogPost = ({ post }) => {
  const components = { CodePenBlend, Picture }
  return (
    <>
      <S.PostHeader>
        <S.PostDate color={post.frontmatter.color}>
          {formatAllDateText(
            post.frontmatter.language,
            post.date,
            post.content
          )}
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.PostWrapper>
        <S.PostBody color={post.frontmatter.color}>
          <MDXRemote {...post.mdxSource} components={components} />
        </S.PostBody>
      </S.PostWrapper>
    </>
  )
}

export default BlogPost
