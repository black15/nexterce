import React from 'react'

function NewsLetter() {
  return (
	 <div className='flex flex-col items-center space-y-6 mt-12'>
		<hr className="w-full border-gray-200 sm:mx-auto dark:border-gray-800 mb-6" />
		<h1 className="text-3xl font-normal">
			Sign Up for the <span className='font-semibold'>NEWSLETTER</span>
		</h1>
		<input
			type="email"
			className="
				form-control
				block
				md:w-[500px]
				px-3
				py-2
				h-12
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
			placeholder="abc@example.com"
			required />
			<button className='font-medium bg-[#158BD4] text-gray-100 px-4 p-2 shadow rounded uppercase'>
				Subscribe
			</button>
	 </div>
  )
}

export default NewsLetter