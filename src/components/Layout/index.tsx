import React from 'react'
import Profile from 'components/Profile'
import * as S from './styled'

import { userProfile } from '../../lib/static'

const { author, position, isMobileHeader } = userProfile

type Props = {
  children: React.ReactNode
  author: string
  position: string
  isMobileHeader: boolean
}

const Layout: React.FC<Props> = ({ children }) => (
  <S.LayoutWrapper>
    <Profile
      author={author}
      position={position}
      isMobileHeader={isMobileHeader}
    />
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
)

export default Layout
