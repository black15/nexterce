import React from 'react'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {CiLaptop} from 'react-icons/ci'
import {BsHeadset} from 'react-icons/bs'
import {FaTshirt} from 'react-icons/fa'
import {GiOfficeChair} from 'react-icons/gi'

function Categories() {
  return (
	<div className='flex flex-row justify-evenly items-center rounded-b-xl shadow-[10px_10px_30px_-20px_rgba(0,0,0,0.3)] my-16 px-0 py-2'>
		<h1 className='text-2xl font-medium'>
			Popular Categories
		</h1>
		<div className='flex flex-row items-center'>
			<div className='flex flex-col items-center space-y-6 p-6 mx-2 h-48 w-44 text-center'>
				<IoPhonePortraitOutline fontSize={72} />
				<span>Smartphones & Tablets</span>
			</div>
			<div className='flex flex-col items-center space-y-6 p-6 mx-2 h-48 w-44 text-center'>
				<CiLaptop fontSize={72} />
				<span>PC & Laptops</span>
			</div>
			<div className='flex flex-col items-center space-y-6 p-6 mx-2 h-48 w-44 text-center'>
				<BsHeadset fontSize={72} />
				<span>Accessories</span>
			</div>
			<div className='flex flex-col items-center space-y-6 p-6 mx-2 h-48 w-44 text-center'>
				<FaTshirt fontSize={72} />
				<span>Shirts</span>
			</div>
			<div className='flex flex-col items-center space-y-6 p-6 mx-2 h-48 w-44 text-center'>
				<GiOfficeChair fontSize={72} />
				<span>Furniture</span>
			</div>
		</div>
 	</div>
  )
}

export default Categories