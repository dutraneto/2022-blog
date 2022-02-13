import Profile from 'components/Profile'
// import SocialLinks from 'SocialLinks'
// import MenuLinks from '../MenuLinks'
import * as S from './styled'

type Props = {
  author: string
  position: string
}

export default function Sidebar(props: Props) {
  const { author, position } = props

  return (
    <S.SidebarWrapper>
      <Profile author={author} position={position} isMobileHeader={false} />
      <S.SidebarLinksContainer>
        {/* <SocialLinks /> */}
        {/* <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} /> */}
      </S.SidebarLinksContainer>
    </S.SidebarWrapper>
  )
}
