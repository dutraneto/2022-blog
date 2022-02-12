import Avatar from 'components/Avatar'
import * as S from './styled'
import Link from 'next/link'

interface Props {
  author: string
  position: string
  isMobileHeader: boolean
}

export default function Profile(props: Props) {
  const { author, position, isMobileHeader } = props

  return (
    <S.ProfileWrapper>
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
