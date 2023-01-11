import Image from "next/image";
import { useRef, useState } from "react";

export default function Header() {

  const menuRef = useRef();
  const menuBtnRef = useRef();
  const [toggleMenu, setToggleMenu] = useState(false)

  const showMenu = () => {
    toggleMenu==false ? setToggleMenu(true) : setToggleMenu(false)
  }

  return (
  <header className="mb-2">
    <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-2
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
       <div>
          <a href="#">
            <span className="text-2xl font-medium text-gray-800">NEXTERCE</span>
          </a>
        </div>
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ref={menuBtnRef}
          onClick={showMenu}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

       <div class={`${toggleMenu ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`} id="menu" ref={menuRef}>
          <ul
            class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
            <div class="md:p-2">
              <div class="xl:w-96">
                <input
                  type="search"
                  class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                  placeholder="Search items..."
                />
              </div>
            </div>
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Features</a
              >
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Pricing</a
              >
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Customers</a
              >
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Blog</a
              >
            </li>
            <li>
              <a
                class="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
                >Sign Up</a
              >
            </li>
          </ul>
        </div>
    </nav>
  </header>
  )
}