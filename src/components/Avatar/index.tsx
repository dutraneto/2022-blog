import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <S.Avatar
        blurDataURL
        placeholder="blur"
        src="/images/avatar-suit.jpg"
        height={90}
        width={90}
        alt="José Dutra Avatar" />
    </S.AvatarWrapper>
  )
}

export default Avatar
