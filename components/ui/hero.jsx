/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useRouter } from 'next/router'
import BackGround from '../../public/img/background-tr.png'

export const Hero = () => {

  const router = useRouter()

  return (
    <section className='flex flex-col lg:flex-row items-center justify-between p-6 my-16 shadow'>
      <div className="flex flex-col items-center space-y-4 px-6 ml-6 lg:text-left">
        <h1 className="text-2xl font-bold text-[#EE8E76] w-full">Get 25%Off Today!</h1>
        <h1 className="text-6xl font-bold w-full"><span className='text-[#EE8E76]'>NEXT</span>ERCE</h1>
        <div>
          <p className='max-w-2xl text-lg'>Where you'll find our most popular and top-rated products. From the latest fashion trends to must-have home essentials, we've got it all.</p>
          <button className='font-medium bg-[#EE9079] text-gray-100 px-4 p-2 shadow rounded uppercase mt-6' onClick={() => router.push('store')}>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className=''>
        <Image
          className='dark:mix-blend-difference'
          src={BackGround}
          alt={'Background image'}
          width={1500}
          height={1300}
          unoptimized
          />
      </div>
    </section>
  )
}
