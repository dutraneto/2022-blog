import styled from 'styled-components'
import media from 'styled-media-query'

export const AvatarWrapper = styled.div`
  img {
    border-radius: 50%;
  }
  margin: auto;
  height: 7.5rem;
  width: 7.5rem;
  clip-path: circle(50% at 50% 50%);
  ${media.lessThan('large')`
    height: 2rem;
    width: 2rem;
  `}
`
