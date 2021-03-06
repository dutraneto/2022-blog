import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
  position: relative;
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`
export const LayoutMain = styled.main`
  background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  ${media.lessThan('large')`
    padding: 3.75rem 0 0 0;
  `}
`
