import Link from "next/link";
import { useSession, signOut } from "next-auth/react"
import {useTheme} from "next-themes";
import { useRef, useState } from "react";

export default function Header() {

  const { data: session } = useSession()
  const {systemTheme , theme, setTheme} = useTheme();
  
  const menuRef = useRef();
  const menuBtnRef = useRef();
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleLogout = async () => {
    signOut('http://localhost:3000')
  }

  const renderThemeChanger= () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if(currentTheme ==="dark"){
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500 mx-4" role="button" onClick={() => setTheme('light')}>
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      )
    }
    else {
      return (
        <svg role="button" onClick={() => setTheme('dark')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 mx-4"> <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" /> </svg>
      )
    }
  };

  const showMenu = () => {
    toggleMenu==false ? setToggleMenu(true) : setToggleMenu(false)
  }

  return (
  <header className="mb-2">
    <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          p-4
          md:p-6
          mb-6
          text-lg 
          text-gray-700
          bg-white
          dark:bg-gray-900
          drop-shadow-xl
          dark:text-gray-50
        "
      >
       <div>
          <Link href={'/'}>
            <span className="text-2xl font-medium text-gray-800 dark:text-gray-50">NEXTERCE</span>
          </Link>
        </div>
       
        <div className="flex flex-row items-center md:hidden">
          {renderThemeChanger()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ref={menuBtnRef}
            onClick={showMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

       <div className={`${toggleMenu ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`} id="menu" ref={menuRef}>
          <ul
            className="
              pt-4
              text-base text-gray-700
              flex
              flex-col
              items-center
              md:flex-row
              md:justify-between 
              md:pt-0 dark:text-gray-100"
          >
            <li>
              <div className="md:p-0">
                <div className="md:mx-4">
                  <input
                    type="search"
                    className="
                      form-control
                      block
                      w-[300px]
                      px-3
                      py-2
                      text-base
                      font-normal
                      text-gray-50
                      bg-white
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50
                    "
                    placeholder="Search items..."
                  />
                </div>
              </div>
            </li>
            <li>
              <a className="md:p-2 py-2 block hover:text-blue-500" href="#"
                >Features</a
              >
            </li>
            <li>
              <a className="md:p-2 py-2 block hover:text-blue-500" href="#"
                >Pricing</a
              >
            </li>
            <li>
              <a className="md:p-2 py-2 block hover:text-blue-500" href="#"
                >Customers</a
              >
            </li>
            {!session 
            ?
            <>
              <li>
                <Link href={'login'} className="md:p-2 py-2 block hover:text-blue-500" 
                  >Login</Link
                >
              </li>
              <li>
                <Link
                  className="md:p-2 py-2 px-2 block duration-300 ease-in-out text-gray-50 hover:bg-blue-600 bg-blue-500 rounded-lg md:mx-2"
                  href={'register'}
                  >Sign Up</Link
                >
              </li>
            </>
            :
              <li>
                <button className="md:p-2 py-2 block hover:text-blue-500" onClick={handleLogout}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rotate-180" width={28}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                </button>
              </li>
            }
          </ul>
          <div className="hidden md:block">
            {renderThemeChanger()}
          </div>
        </div>
    </nav>
  </header>
  )
}