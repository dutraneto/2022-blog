import Link from 'next/link'
import * as S from './styled'

const Main = ({
  title = 'Boilerplate',
  description = 'Boilerplate for Typescript, React, Next, and Styled Components',
  quote = 'A developer trying to be a better developer',
  textClick = "→ here"
}) => (
  <S.Wrapper>
    <S.Logo src="/images/favicon.png" alt="My avatar" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Quote>{quote}</S.Quote>
    <S.LinkToPost>Click <Link href="/first-post"><a>{textClick}</a></Link> to go to the first post</S.LinkToPost>
  </S.Wrapper>
)

export default Main
