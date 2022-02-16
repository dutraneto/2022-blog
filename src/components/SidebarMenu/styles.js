import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarMenuWrapper = styled.nav`
  ${media.lessThan('large')`
    display: flex;
    justify-content: center;
    flex-grow: 2;
  `}
`

export const SidebarMenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    margin-left: 0;
  `}
`

export const SidebarMenuItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--color-white);
  }

  ${media.lessThan('large')`
      margin-left: 0;
  `}
`

export const SidebarMenuLink = styled.a`
  color: #626068;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--color-white);
    font-weight: 300;
  }
`
