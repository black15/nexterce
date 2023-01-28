import React from 'react'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {CiLaptop} from 'react-icons/ci'
import {BsHeadset} from 'react-icons/bs'
import {FaTshirt} from 'react-icons/fa'
import {GiOfficeChair} from 'react-icons/gi'

function Categories() {
  return (
	<div className='flex flex-row flex-wrap space-y-6 justify-evenly items-center rounded-b-xl border-b-2 dark:border-[#0f1523] my-16 px-0 py-2'>
		<h1 className='text-2xl font-medium uppercase'>
			Popular Categories
		</h1>
		<div className='flex flex-row flex-wrap justify-center'>
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