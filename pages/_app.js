import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import { store } from "../store"
import { ThemeProvider } from "next-themes"
import {useState, useEffect} from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/nprogress.css'
import { useRouter } from "next/router"
import nProgress from "nprogress"

export default function App({
  Component, pageProps: {session, ...pageProps}
}) {

  const router = useRouter()
  const [showChild, setShowChild] = useState(false);
  nProgress.configure({showSpinner: false})
  useEffect(() => {
    setShowChild(true); // avoid react Hydration failed error screen
    // NProgress bar settings
    router.events.on('routeChangeStart', () =>  nProgress.start())
    router.events.on('routeChangeComplete', () =>  nProgress.done())
    router.events.on('routeChangeError', () =>  nProgress.done())
  }, [router.events]);

  if (!showChild) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  )

}