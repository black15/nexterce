import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useState } from 'react'
import { getSession, signIn } from 'next-auth/react'
import { useFormik } from 'formik'
import Banner from '../public/img/login-rafiki.svg'
import { validate_login } from '../libs/validate'

const Login = () => {

  const router = useRouter()
  const [error, setError] = useState(null)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validate_login,
    onSubmit
  })
  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    })
    if(status.ok) router.push(status.url)
    else {
      setError(status.error)
    }
  }

  const handleGoogleAuth = async () => {
    signIn('google', {callbackUrl: 'http://localhost:3000'})
  }
  const handleFacebookAuth = async () => {
    signIn('facebook', {callbackUrl: 'http://localhost:3000'})
  }
  const handleGithubAuth = async () => {
    signIn('github', {callbackUrl: 'http://localhost:3000'})
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      
      <section>
        <div className="container mx-auto p-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <Image
                className="w-full"
                src={Banner}
                alt={"Phone image"}
                width={300}
                height={300}
                unoptimized
              />
            </div>
            <div className="lg:w-4/12 lg:ml-20">
              <div className='text-center mb-6'>
                <h1 className='text-gray-800 text-3xl font-medium dark:text-gray-50 italic'>Login</h1>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50 ${formik.errors.email && 'border-1 border-red-700 focus:border-red-600 dark:border-red-700 dark:focus:border-red-600'}`}
                    placeholder="E-mail"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.errors.email ? <span className='text-sm text-red-500 font-medium'>{formik.errors.email}</span> : null}
                </div>

                <div className="mb-6 relative">
                  <input
                    type="password"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50 ${formik.errors.password && 'border-1 border-red-700 focus:border-red-600 dark:border-red-700 dark:focus:border-red-600'}`}
                    placeholder="Password"
                    {...formik.getFieldProps('password')}
                  />
                  {formik.errors.password ? <span className='text-sm text-red-500 font-medium'>{formik.errors.password}</span> : null}
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                    />
                    <label className="form-check-label inline-block text-gray-800 dark:text-gray-50" htmlFor="exampleCheck2"
                      >Remember me</label
                    >
                  </div>
                  <a
                    href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >Forgot password?</a
                  >
                </div>
                
                <div>
                  {error && <p className='text-red-700 font-medium mb-2'>{error}</p>}
                </div>

                <div className="tems-center mb-6">
                  <span className='text-gray-800 dark:text-gray-50'>Don&apos;t have an account? </span>
                  <Link href={"register"} className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Sign up</Link>
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0 dark:text-gray-50">OR</p>
                </div>

                {/* Social Media Authentication */}
                <button
                  className="px-7 py-3 text-gray-800 font-medium text-sm text-center leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-2 dark:text-gray-50"
                  role="button"
                  type='button'
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleGoogleAuth}
                >
                  <svg width={25} className='mx-2' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path> <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"></path> <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"></path> <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"></path> </g></svg>Continue with Google
                </button>
                <button
                  className="px-7 py-3 text-gray-800 font-medium text-sm text-center leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-2 dark:text-gray-50"
                  role="button"
                  type='button'
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleGithubAuth}
                >
                  <svg width={27} className='mx-2' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#555" fillRule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clipRule="evenodd"></path></g></svg>Continue with Github
                </button>
                <button
                  className="px-7 py-3 text-gray-800 font-medium text-center text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-2 dark:text-gray-50"
                  type='button'
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleFacebookAuth}
                >
                  <svg width={25} className='mx-2' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"></path></g></svg> Continue with Facebook
                </button>
                {/* End Social Media Authentication */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login

export async function getServerSideProps({req}) {
  const session = await getSession({req})

  if(session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {session}
  }
}