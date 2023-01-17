import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import { store } from "../store"
import { ThemeProvider } from "next-themes"
import {useState, useEffect} from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'

export default function App({
  Component, pageProps: {session, ...pageProps}
}) {

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window !== 'undefined') {
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
}