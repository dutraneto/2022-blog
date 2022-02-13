import React from 'react'
import Profile from 'components/Profile'
import Sidebar from 'components/Sidebar'
import * as S from './styled'

import { userProfile } from '../../lib/static'

const { author, position, isMobileHeader } = userProfile

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
