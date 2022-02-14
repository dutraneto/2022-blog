import styled from 'styled-components'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`
export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #626068;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: var(--color-white);
  }
`

export const IconsWrapper = styled.div`
  fill: var(--color-white);
  width: 30px;
  height: 30px;
`
