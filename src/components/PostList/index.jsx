import PostItem from 'components/PostItem'
import * as S from './styles'

const PostList = (props) => {
  const { allPostsData } = props
  const postsList = allPostsData.map((postItem) => {
    const { id, date, title, description, category, color } = postItem
    return (
      <PostItem
        key={id}
        id={id}
        date={date}
        title={title}
        description={description}
        category={category}
        color={color}
      />
    )
  })
  return <S.PostListWrapper>{postsList}</S.PostListWrapper>
}

export default PostList
