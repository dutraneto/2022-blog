import { useRouter } from 'next/router'
import Link from 'next/link'
import * as S from './styles'

import { Home } from '@styled-icons/feather/Home'
import { Search } from '@styled-icons/evil/Search'
import { ArrowUp } from '@styled-icons/feather/ArrowUp'
import { Menu } from '@styled-icons/boxicons-regular/Menu'

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
  const router = useRouter()
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <S.MenuBarWrapper>
        <S.MenuBarGroup>
          <Link href="/" passHref>
            <S.MenuBarLink
              title="Get back to home"
              className={router.pathname === '/' ? 'active' : ''}
            >
              <S.MenuBarItem onClick={openMenu}>
                <Home />
              </S.MenuBarItem>
            </S.MenuBarLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuBarLink
              title="Get back to home"
              className={router.pathname === '/' ? 'active' : ''}
            >
              <S.MenuBarItem onClick={openMenu}>
                <Search />
              </S.MenuBarItem>
            </S.MenuBarLink>
          </Link>
        </S.MenuBarGroup>
        <S.MenuBarGroupMobile>
          <S.MenuBarGroup>
            <S.MenuBarItem title="Open menu" onClick={openMenu}>
              <Menu />
            </S.MenuBarItem>
          </S.MenuBarGroup>
        </S.MenuBarGroupMobile>
        <S.MenuBarGroup>
          <S.MenuBarItem
            to="#"
            title="Nav to top"
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarWrapper>
    </>
  )
}

export default MenuBar
