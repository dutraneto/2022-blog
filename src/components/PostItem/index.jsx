import * as S from './styles'
import Icons from './icons'

import Link from 'next/link'

const PostItem = (props) => {
  const { id, date, title, description, category, color } = props
  const TagIcon = category === 'Misc' ? Icons.Blog : Icons[category]
  return (
    <Link href={`/blog/${id}`} passHref>
      <S.PostItemLink color={color}>
        <S.PostItemWrapper>
          <S.PostItemTag color={color}>
            <TagIcon />
          </S.PostItemTag>
          <S.PostItemInfo>
            <S.PostItemDate>{date} &bull; 2 min to read</S.PostItemDate>
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemDescription>{description}</S.PostItemDescription>
          </S.PostItemInfo>
        </S.PostItemWrapper>
      </S.PostItemLink>
    </Link>
  )
}

export default PostItem
