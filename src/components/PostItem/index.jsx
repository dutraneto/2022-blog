import * as S from './styles'
import Icons from './icons'
import Link from 'next/link'

import { userProfile } from '../../lib/static'

const PostItem = (props) => {
  const { id, date, title, description, category, color, language } = props
  const TagIcon = category === 'Misc' ? Icons.Blog : Icons[category]
  return (
    <Link href={`/posts/${id}`} passHref>
      <S.PostItemLink color={color}>
        <S.PostItemWrapper>
          <S.PostItemTag color={color}>
            <TagIcon />
          </S.PostItemTag>
          <S.PostItemInfo>
            <S.PostItemDate>
              {date} &bull; {language === 'Portuguese' ? 'autor' : 'author'}{' '}
              &mdash; {userProfile.author}
            </S.PostItemDate>
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemDescription>{description}</S.PostItemDescription>
          </S.PostItemInfo>
        </S.PostItemWrapper>
      </S.PostItemLink>
    </Link>
  )
}

export default PostItem
