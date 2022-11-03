import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Diego Carrillo</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Diego Carrillo portfolio web page"/>
        <meta name="keywords" content="Frontend, developer, backend, javascript, node"/>

        <meta name="author" content="Diego Carrillo"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
