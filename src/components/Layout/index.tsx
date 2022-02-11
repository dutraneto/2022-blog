import * as S from "./styled"

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {

  return (
    <S.LayoutWrapper>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}
