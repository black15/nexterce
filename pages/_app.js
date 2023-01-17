import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import { store } from "../store"
import Layout from '../components/layout'
import '../styles/globals.css'

export default function App({
  Component, pageProps: {session, ...pageProps}
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>      
      </SessionProvider>
    </Provider>
  )
}