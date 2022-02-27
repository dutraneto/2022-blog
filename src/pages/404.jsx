import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.section`
  align-items: center;
  background-image: url('https://res.cloudinary.com/duim1pyqp/image/upload/v1644544630/misc/john-404_wrzags.gif');
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 800px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
  @media screen and (max-width: 768px) {
    background-size: 280px;
  }
`

const Title = styled.h1`
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`

const Text = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
`

const Button = styled.a`
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 1rem;
  padding: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.7;
  }
`

const NotFoundPage = () => (
  <Container>
    <Title>404</Title>
    <Text>It looks like you did not find what you are looking for</Text>
    <Link href="/" passHref>
      <Button>⬅ Get back to blog!?</Button>
    </Link>
  </Container>
)

export default NotFoundPage
