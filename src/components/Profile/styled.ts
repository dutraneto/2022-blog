import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

export const ProfileWrapper = styled.section`
  color: var(--color-white);
  display: ${(props) => (props.isMobileHeader ? 'none' : 'flex')};
  flex-direction: column;

  ${media.lessThan('large')`
    align-items: center;
    box-shadow: -5px 5px 0px #1e1527, 5px -5px 0px #2a1e37;
    display: ${(props) => (props.isMobileHeader ? 'flex' : 'none')};
    padding: 1rem;
    background: var(--color-background-sidebar);
  `}
`

export const ProfileLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  transition: all 1s !important;

  ${media.lessThan('large')`
    display: inline-block;
    /* flex-direction: column; */
    align-items: center;
    align-content: center;
    text-align: left;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 1rem auto 0;
  text-decoration: none;

  ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 14px;
  font-weight: 300;

  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin: 0.2rem 0 0 10px;
  `}
`
