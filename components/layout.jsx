import { Fragment } from "react"
import Header from "./snippets/header"


export default function Layout({ children }) {
  return (
    <div className='container mx-auto'>
      <Header />
      <main>{children}</main>
    </div>
  )
}