import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--color-background-sidebar);
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 1.5rem;
  position: absolute;
  padding: 2rem;
  text-align: center;
  width: 16vw;
  max-width: 13rem;
  border-radius: 130px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: -5px 5px 0px #1e1527, 5px -5px 0px #2a1e37;
  z-index: 9;
  transition: transform 0.6s ease-in-out;
  top: 0;
  bottom: 0;
  left: 0;

  ${media.lessThan('large')`
    right: 0;
    top: 4.5rem;
    bottom: 0;
    align-items: center;
    padding: 1rem;
    width: auto;
    margin: 0;
    border-radius: 0;
    background: rgba( 36, 25, 47, 0.8 );
    box-shadow: 0 8px 32px 0 rgba( 249,42,173, 0.1);
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
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
