import React from 'react'
import Profile from 'components/Profile'
import Sidebar from 'components/Sidebar'
import * as S from './styles'

import { userProfile } from '../../lib/static'

const { author, position, isMobileHeader } = userProfile

export default function Layout({ children }) {
  return (
    <S.LayoutWrapper>
      <Profile
        author={author}
        position={position}
        isMobileHeader={isMobileHeader}
      />
      <Sidebar author={author} position={position} />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}
