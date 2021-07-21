import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import HeaderTitle from '../comps/HeaderTitle'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <HeaderTitle />
      <Component {...pageProps} />
    </>
  )
}
