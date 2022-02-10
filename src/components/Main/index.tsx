import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'Boilerplate for Typescript, React, Next, and Styled Components',
  quote = 'A developer trying to be a better developer'
}) => (
  <S.Wrapper>
    <S.Logo src="/images/favicon.png" alt="My avatar" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Quote>{quote}</S.Quote>
  </S.Wrapper>
)

export default Main
