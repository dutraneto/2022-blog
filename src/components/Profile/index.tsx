import Avatar from 'components/Avatar'
import * as S from './styled'
import Link from 'next/link'

export type ProfileProps = {
  author: string
  position: string
  isMobileHeader: boolean
}

export default function Profile({
  author,
  position,
  isMobileHeader
}: ProfileProps) {
  return (
    <S.ProfileWrapper>
      {isMobileHeader}
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
