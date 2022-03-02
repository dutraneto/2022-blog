import * as S from './styles'
import links from './content'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SidebarMenu = () => {
  const router = useRouter()

  return (
    <S.SidebarMenuWrapper>
      <S.SidebarMenuList>
        {links.map((link, index) => (
          <S.SidebarMenuItem key={index}>
            <Link href={link.url} passHref>
              <S.SidebarMenuLink
                className={router.pathname === link.url ? 'active' : ''}
              >
                {link.label}
              </S.SidebarMenuLink>
            </Link>
          </S.SidebarMenuItem>
        ))}
      </S.SidebarMenuList>
    </S.SidebarMenuWrapper>
  )
}

export default SidebarMenu
