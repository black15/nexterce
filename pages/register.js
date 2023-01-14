import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { getSession } from 'next-auth/react'
import { useState } from 'react'
import { useFormik } from 'formik'
import Banner from '../public/img/Sign-up-rafiki.svg'
import { validate_registration } from '../libs/validate'

const Register = () => {

  const router = useRouter()
  const [error, setError] = useState(null)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate: validate_registration,
    onSubmit: createNewUser,
  });

  async function createNewUser(values) {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    }
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', settings)
      const data = await response.json();
      if (!data.error) {
        router.push('login')
      }
      else {
        setError(data.error)
      }
    } catch(e) {
      console.log('Error', e);
    }
  }

  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      
      <section>
        <div className="container p-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <Image
                className="w-full"
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
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50 ${formik.errors.firstName && 'border-1 border-red-700 focus:border-red-600 dark:border-red-700 dark:focus:border-red-600'}`}
                    placeholder="First name"
                    {...formik.getFieldProps('firstName')}
                  />
                  {formik.errors.firstName ? <span className='text-sm text-red-500 font-medium'>{formik.errors.firstName}</span> : null}
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50 ${formik.errors.lastName && 'border-1 border-red-700 focus:border-red-600 dark:border-red-700 dark:focus:border-red-600'}`}
                    placeholder="Last name"
                    {...formik.getFieldProps('lastName')}
                  />
                  {formik.errors.lastName ? <span className='text-sm text-red-500 font-medium'>{formik.errors.lastName}</span> : null}
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50 ${formik.errors.email && 'border-1 border-red-700 focus:border-red-600 dark:border-red-700 dark:focus:border-red-600'}`}
                    placeholder="Email address"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.errors.email ? <span className='text-sm text-red-500 font-medium'>{formik.errors.email}</span> : null}
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700 dark:focus:border-gray-500 dark:border-gray-800 dark:text-gray-50 ${formik.errors.password && 'border-1 border-red-700 focus:border-red-600 dark:border-red-700 dark:focus:border-red-600'}`}
                    placeholder="Password"
                    {...formik.getFieldProps('password')}
                  />
                  {formik.errors.password ? <span className='text-sm text-red-500 font-medium'>{formik.errors.password}</span> : null}
                </div>
                <div>
                  {error && <p className='text-red-700 font-medium mb-2'>{error}</p>}
                </div>
                <div className="tems-center mb-6">
                  <span className='text-gray-800 dark:text-gray-50'>Already have an account? </span>
                  <Link href={"login"} className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Sign in</Link>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
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

export default Register

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