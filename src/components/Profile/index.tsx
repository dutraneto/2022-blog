import Avatar from "components/Avatar"
import * as S from "./styled"
import Link from 'next/link'

export default function Profile ({ author = 'José Dutra', position = 'Frontend Developer', isMobileHeader = true }) {
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
