import Link from 'next/link'
import Main from 'components/Main'
import Layout from 'components/Layout'
import Profile from '../components/Profile';

export default function Home() {
  return (
    <>
      <Layout>
        <Profile />
      </Layout>
    </>
  )
}
