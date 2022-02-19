import PostItem from 'components/PostItem'

const Post = (props) => {
  const { allPostsData } = props
  return allPostsData.map((postItem) => {
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
}

export default Post
