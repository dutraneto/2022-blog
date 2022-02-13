import React, { useState } from 'react'
import Profile from 'components/Profile'
import Sidebar from 'components/Sidebar'
import * as S from './styles'

import { userProfile } from '../../lib/static'

const { author, position } = userProfile

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <S.LayoutWrapper>
      <Profile author={author} position={position} isMobileHeader={true} />
      <Sidebar
        author={author}
        position={position}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}
