import styled from 'styled-components'
import media from 'styled-media-query'

export const PostListWrapper = styled.div`
  margin: 5rem auto;

  ${media.lessThan('medium')`
    margin: 0 auto 3.75rem;
  `}
`
