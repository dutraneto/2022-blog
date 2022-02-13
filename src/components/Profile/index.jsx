import Avatar from 'components/Avatar'
import * as S from './styles'
import Link from 'next/link'

export default function Profile({ author, position, isMobileHeader }) {
  return (
    <S.ProfileWrapper isMobileHeader={isMobileHeader}>
      <Link href="/">
        <S.ProfileLink>
          <Avatar />
          <div>
            <S.ProfileAuthor>{author}</S.ProfileAuthor>
            <S.ProfilePosition>{position}</S.ProfilePosition>
          </div>
        </S.ProfileLink>
      </Link>
    </S.ProfileWrapper>
  )
}
