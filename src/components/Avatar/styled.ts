import styled from "styled-components"
import media from "styled-media-query"
import Image from 'next/image'

export const AvatarWrapper = styled.picture`
  border-radius: 50%;

  ${media.lessThan("large")`

  `}
`

export const Avatar = styled(Image)`
  border-radius: 50%;
  margin: auto;
  margin-top: 0.25rem;

  ${media.lessThan("large")`
    margin-top: 0;
  `}
`
