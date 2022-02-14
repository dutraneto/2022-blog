import Icons from './icons'
import links from './content'

import * as S from './styles'

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, index) => {
        const Icon = Icons[link.label]
        return (
          <S.SocialLinksItem key={index}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconsWrapper>
                <Icon />
              </S.IconsWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks
