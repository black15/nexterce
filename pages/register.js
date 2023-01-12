import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from '../public/img/Sign-up-rafiki.svg'

const register = () => {
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      
      <section class="">
        <div class="container p-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-1/2 mb-12 md:mb-0">
              <Image
                class="w-full"
                src={Banner}
                alt={"Sign up banner image"}
                width={400}
                height={400}
                unoptimized
              />
            </div>
            <div class="lg:w-4/12 lg:ml-20">
              <div className='text-center mb-6'>
                <h1 className='text-gray-800 text-3xl font-medium dark:text-gray-50 italic'>Register</h1>
              </div>
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50"
                    placeholder="Username"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50"
                    placeholder="Email address"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50"
                    placeholder="Password"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50"
                    placeholder="Confirm Password"
                  />
                </div>

                <div class="tems-center mb-6">
                  <span className='text-gray-800 dark:text-gray-50'>Already have an account? </span>
                  <Link href={"login"} className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Sign in</Link>
                </div>

                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default register