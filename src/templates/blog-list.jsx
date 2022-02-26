import Post from 'components/Post'
import styled from 'styled-components'
import media from 'styled-media-query'

const PostListWrapper = styled.div`
  margin: 5rem auto;

  ${media.lessThan('medium')`
    margin: 0 auto 3.75rem;
  `}
`
const BlogList = ({ posts }) => {
  console.log(posts)
  const sortedPosts = posts
    .map((post, i) => (
      <Post
        key={i}
        slug={post.slug}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        category={post.frontmatter.category}
        color={post.frontmatter.color}
        language={post.frontmatter.language}
      />
    ))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )

  return <PostListWrapper>{sortedPosts}</PostListWrapper>
}

export default BlogList
