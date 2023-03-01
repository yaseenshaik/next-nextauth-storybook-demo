import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'
import '../styles/globals.scss'

/** @param {import('next/app').AppProps} props */
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
