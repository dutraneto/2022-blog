import React, { useState } from 'react'
import Profile from 'components/Profile'
import Sidebar from 'components/Sidebar'
import MenuBar from 'components/MenuBar'
import * as S from './styles'

import { userProfile } from '../../lib/static'

const { author, position } = userProfile

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <S.LayoutWrapper>
      <Profile author={author} position={position} isMobileHeader />
      <Sidebar
        author={author}
        position={position}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.LayoutWrapper>
  )
}
