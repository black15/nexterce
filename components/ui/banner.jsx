import Image from 'next/image'
import React from 'react'
import CountdownTimer from './contdonw'
import Laptop from '../../public/img/bannerimg1.png'
import Headset from '../../public/img/bannerimg2.png'

function Banner() {
  return (
	 <div className='flex flex-col space-y-12 lg:flex-row justify-around items-center rounded-b-xl shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.3)] mt-12 px-0 py-2'>
		<div>
			<Image
				src={Laptop}
				alt={"Banner Img1"}
				width={450}
				height={450}
				unoptimized
			/>
		</div>
		<div className='flex flex-col items-center space-y-6'>
			<CountdownTimer />
			<div className='flex flex-col items-center space-y-2 uppercase'>
				<span className='text-2xl font-semibold'>hot deal this week</span>
				<span className='text-2xl font-normal'>New Collection Up to 50% OFF</span>
			</div>
			<button className='font-medium bg-[#158BD4] text-gray-100 px-4 p-2 shadow rounded uppercase'>
				SHOP NOW
			</button>
		</div>
		<div>
		<Image
				src={Headset}
				alt={"Banner Img1"}
				width={350}
				height={350}
				unoptimized
			/>
		</div>
	 </div>
  )
}

export default Banner