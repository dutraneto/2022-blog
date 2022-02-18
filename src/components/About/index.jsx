import * as S from './styles'
import Link from 'next/link'

import { userAbout } from '../../lib/static'

const About = () => {
  const { salutation } = userAbout
  return (
    <S.AboutWrapper>
      <S.AboutTitle>Hi!</S.AboutTitle>
      <S.AboutDescription>{salutation}</S.AboutDescription>
      <Link href="/blog/" passHref>
        <S.PortfolioLink href="/works/" title="Click to go to my blog">
          Please, click here to visit my blog!
        </S.PortfolioLink>
      </Link>
    </S.AboutWrapper>
  )
}
export default About
