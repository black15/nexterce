import { Fragment } from "react"
import Footer from "./snippets/footer"
import Header from "./snippets/header"
import { ThemeProvider } from 'next-themes'


export default function Layout({ children }) {
  return (
    <div className='mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-50'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}