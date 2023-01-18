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
  // Navigration Bar Top + Bottom
  <header className="mb-2">
    {/* Top Navigration Bar */}
    <div className="flex flex-row items-center justify-between w-full px-6 py-1 border-b-2 border-gray-100 dark:border-gray-800">
      {/* Search products field */}
      <div className="bg-red-300">
        <input
          type="search"
          className="
            form-control
            block
            w-[500px]
            px-3
            py-2
            text-base
            font-normal
            text-gray-50
            bg-white
            border border-solid border-gray-300
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50
          "
          placeholder="Search items..."
        />
        {/* Show products list by names when user searchs */}
        <div className="hidden absolute left-6 top-12 h-72 w-[500px] bg-gray-800 z-10 rounded-b">
          <div className="flex flex-col w-full">
            <div className="p-4 text-gray-700 dark:text-gray-100 border-b-2 border-gray-100 dark:border-gray-700">
              Test
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        {!session 
          ?
          <>
            <Link href={'login'} className="text-gray-800 dark:text-gray-100 font-semibold py-2 block md:p-2 hover:text-blue-500 dark:hover:text-blue-500" 
              >Login</Link
            >
            <Link
              className="md:p-2 py-2 px-2 block duration-300 ease-in-out text-gray-50 hover:bg-blue-600 bg-blue-500 rounded-sm md:mx-2"
              href={'register'}
              >Sign Up</Link
            >
          </>
          :
          <div className="dropdown inline-block relative duration-300 ease-in-out z-20">
            {/* List Profile and Logout navigation buttons  */}
            <button className="text-gray-800 dark:text-gray-100 font-medium py-2 rounded inline-flex items-center">
            <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="10" r="3" stroke="#777" strokeLinecap="round"></circle> <circle cx="12" cy="12" r="9" stroke="#777"></circle> <path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#555" strokeLinecap="round"></path> </g></svg>
            </button>
            <ul className="dropdown-menu absolute right-0 top-10 hidden text-gray-700 pt-1">
              <li className="">
                <button className="rounded bg-gray-200 font-medium hover:text-red-500 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap" onClick={() => handleLogout()}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
          }
          <div className="hidden md:block">
            {renderThemeChanger()}
          </div>
      </div>
    </div>

    {/* Bottom Navigation Bar */}
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
              <Link href={'/'}>
                <span className="text-gray-800 dark:text-gray-50 font-medium uppercase px-4">Home</span>
              </Link>
            </li>
            <li>
              <div className="dropdown inline-block relative duration-300 ease-in-out ">
                <button className="text-gray-800 dark:text-gray-100 font-medium py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1 uppercase">all categories</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                  <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown inline-block relative duration-300 ease-in-out">
                <button className="text-gray-800 dark:text-gray-100 font-medium py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1 uppercase">pages</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                  <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown inline-block relative duration-300 ease-in-out">
                <button className="text-gray-800 dark:text-gray-100 font-medium py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1 uppercase">blogs</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                  <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
    </nav>
  </header>
  )
}