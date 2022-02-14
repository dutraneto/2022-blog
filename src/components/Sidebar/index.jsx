import Profile from 'components/Profile'
import SocialLinks from 'components/SocialLinks'
import MenuLinks from 'components/SidebarMenu'
import * as S from './styles'

export default function Sidebar(props) {
  const { author, position, isMenuOpen, setIsMenuOpen } = props

  return (
    <S.SidebarWrapper isMenuOpen={isMenuOpen}>
      <Profile author={author} position={position} isMobileHeader={false} />
      <S.SidebarLinksContainer>
        <SocialLinks />
        <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </S.SidebarLinksContainer>
    </S.SidebarWrapper>
  )
}
