/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ProductCard from './products/card'

function Search({query, products}) {
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