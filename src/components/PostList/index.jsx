import PostItem from 'components/PostItem'
import * as S from './styles'

const PostList = ({ posts }) => {
  const postsList = posts.map((post, i) => {
    return (
      <PostItem
        key={i}
        slug={post.slug}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        category={post.frontmatter.category}
        color={post.frontmatter.color}
        language={post.frontmatter.language}
      />
    )
  })
  return <S.PostListWrapper>{postsList}</S.PostListWrapper>
}

export default PostList
