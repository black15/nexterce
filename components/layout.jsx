import { Fragment } from "react"
import Footer from "./snippets/footer"
import Header from "./snippets/header"
import { ThemeProvider } from 'next-themes'


export default function Layout({ children }) {
  return (
    <div className='mx-auto bg-gray-50 dark:bg-gray-900'>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}