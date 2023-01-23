import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({product}) => {
  return (
    <div className="flex flex-col items-center space-y-2 md:w-72 w-52 max-w-sm bg-white rounded-lg shadow drop-shadow-sm dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-900 duration-300 ease-in-out hover:-translate-y-1 m-2">
      <Link href={`/p/${product.slug}`}>
        <Image 
          className="p-8 rounded-t-lg w-52 h-52 md:w-72 md:h-72" 
          src={product.images[0].url}
          alt={"product image"}
          width={350}
          height={350}
          unoptimized
        />
      </Link>
      <div className="flex flex-col items-center md:items-start space-y-2 px-5 pb-5">
        <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-12 items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
          <Link href={`/p/${product.slug}`} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</Link>
        </div>
      </div>
    </div>      
  )
}

export default ProductCard