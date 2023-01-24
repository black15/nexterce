/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import ProductCard from './products/card'
import emptySVG from '../../public/img/empty_box.svg'

function Search({query, products}) {
	if (!products.length) {
		return (
			<div className="flex flex-col space-y-6 items-center mt-16">
				<h1 className="px-6 text-2xl font-medium">
					No Results Found For "{query}"
				</h1>
				<Image
					src={emptySVG}
					alt='Products not found'
					width={300}
					height={300}
				/>
			</div>
			)
	}
  return (
	 <div className='flex flex-col space-y-12 px-6 py-1'>
		<h1 className="text-2xl text-gray-800 dark:text-gray-100 font-medium">
			Result for "{query}"
		</h1>

		<div className='flex flex-row flex-wrap justify-center'>
			{products.map(product => <ProductCard key={product.id} product={product} />)}
		</div>
	 </div>
  )
}

export default Search