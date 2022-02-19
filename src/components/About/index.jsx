import * as S from './styles'
import Link from 'next/link'

import { userAbout } from '../../lib/static'

const About = () => {
  const { salutation } = userAbout
  return (
    <S.AboutWrapper>
      <S.AboutTitle>Hi!</S.AboutTitle>
      <S.AboutDescription>{salutation}</S.AboutDescription>
      <Link href="https://github.com/dutraneto/2022-blog" passHref>
        <S.PortfolioLink
          href="https://github.com/dutraneto/2022-blog"
          title="Click to go to this project source"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please, click here to visit this project!
        </S.PortfolioLink>
      </Link>
    </S.AboutWrapper>
  )
}
export default About
