// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globals'

import { userProfile } from '../lib/static'

function App({ Component, pageProps }: AppProps) {
  const { author, position, favicon } = userProfile
  return (
    <>
      <Head>
        <title>
          {author} | {position}
        </title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <link rel="apple-touch-icon" href={favicon} type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple starter to work with Typescript, React, NextJS, nad Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App
