import '../styles/globals.css'
import '../styles/markdown.css'
import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css" rel="stylesheet"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
