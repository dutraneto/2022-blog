import styled from 'styled-components'
import media from 'styled-media-query'

export const AboutWrapper = styled.section`
  margin: auto;
  width: 60vw;
  padding: 5rem 5rem 0 0;
  color: var(--color-white);

  ${media.lessThan('large')`
    padding: 2rem 1rem;
    display:block !important;
  `}

  ${media.lessThan('medium')`
    width: auto;
  `}

  ${media.lessThan('small')`
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`

export const AboutTitle = styled.h1`
  font-size: max(1.625rem, 4vw);
  font-weight: 700;
  line-height: 2;
  margin: 0.2rem 0 0.5rem;
`

export const AboutDescription = styled.p`
  font-size: max(1.125rem, 1.8vw);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1rem;
`

export const PortfolioLink = styled.a`
  color: #3776ab;
  text-decoration: none;
  border-bottom: 3px dashed #3776ab;
  transition: filter 0.5s;
  padding-bottom: 5px;
  font-size: max(1.125rem, 1.8vw);
`
