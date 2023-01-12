import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout'
import '../styles/globals.css'
import * as React from 'react'

export default function App({
  Component, pageProps: {session, ...pageProps}
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>      
    </SessionProvider>
  )
}