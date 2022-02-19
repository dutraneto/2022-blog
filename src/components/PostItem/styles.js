import styled from 'styled-components'
import media from 'styled-media-query'

export const PostItemLink = styled.a`
  color: var(--color-white);
  display: flex;
  text-decoration: none;
  transition: color 0.5s;
  margin-top: 1rem;

  &:not(:last-item) {
    margin-bottom: 1rem;
  }

  &:hover {
    color: ${(props) => props.color};
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 2px dashed var(--color-grey);
  padding: 2rem 3rem;
  width: 100%;
  position: relative;
  overflow: hidden;

  &:hover {
    border-bottom: 2px dashed ${(props) => props.color};
  }

  ${media.lessThan('large')`
    padding: 2rem 1rem;
  `}

  ${media.lessThan('small')`
    padding-left: 0;
    padding-right: 1rem;
  `}
`

export const PostItemTag = styled.div`
  color: ${(props) => props.color};
  min-height: 75px;
  min-width: 75px;

  ${media.lessThan('small')`
    position: absolute;
    z-index: 0;
    right: -30px;
    bottom: -30px;
    transform: rotate(15deg);
    min-height: 175px;
    min-width: 175px;
    filter: opacity(0.3);

  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('small')`
    margin-left: 1rem;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.75rem;
  z-index: 2;
`

export const PostItemTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0.2rem 0 0.5rem;
  z-index: 2;

  ${media.lessThan('small')`
    font-size: 1.625rem;
  `}
`

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  z-index: 2;
`
