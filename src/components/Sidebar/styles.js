import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--color-background-sidebar);
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 2rem 0 0 1.5rem;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 16vw;
  max-width: 13rem;
  border-radius: 50px;
  box-shadow: -5px 5px 0px #1e1527, 5px -5px 0px #2a1e37;
  z-index: 9;
  transition: transform 0.6s ease-in-out;

  ${media.lessThan('large')`
    position: relative;
    right: 0;
    top: 10px;
    bottom: 60px;
    align-items: center;
    padding: 1rem;
    width: auto;
    margin: 0;
    border-radius: 0;
    transform: ${(props) =>
      props.isMenuOpen ? 'translateX(-100vw)' : 'translateX(0)'};
  `}
`

export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`
