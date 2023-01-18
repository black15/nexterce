import { Fragment } from "react"
import Footer from "./snippets/footer"
import Header from "./snippets/header"
import { ThemeProvider } from 'next-themes'


export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-50">
      <main className='mx-auto container'>
        <Header />
        <main>{children}</main>
        <Footer />
      </main>
    </div>
  )
}