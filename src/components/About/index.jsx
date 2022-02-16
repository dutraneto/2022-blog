import * as S from './styles'
import Link from 'next/link'

const About = () => {
  return (
    <S.AboutWrapper>
      <S.AboutTitle>Hi!</S.AboutTitle>
      <S.AboutDescription>
        I am José Dutra. I worked at The Brazilian Army Forces as a Sergeant for
        the past 16 years. However, my passion for programming has got me
        following a new career change as a Frontend Developer. My interest in
        programming languages, such as JavaScript, drove me to specializing
        currently in Frontend Development.
      </S.AboutDescription>
      <S.AboutDescription>
        As a developer, I've been working with basic web technologies (HTML,
        CSS, and Javascript) and sophisticated frameworks and libraries like
        jQuery, React, Sass, Bootstrap in projects of different sizes. I also
        have experience building backend applications using Node.js with
        Express.js and MongoDB and as well as Python with Django.
      </S.AboutDescription>
      <Link href="/works/" passHref>
        <S.PortfolioLink href="/works/" title="Click to go to my works">
          Please, click here to visit my lab!
        </S.PortfolioLink>
      </Link>
    </S.AboutWrapper>
  )
}
export default About
