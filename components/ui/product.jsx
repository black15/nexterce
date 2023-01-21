import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { addProduct, increase } from "../../store/cartSlice"

const ProductDeatils = ({product, related}) => {
	
	const router = useRouter()

	// Redux dispatch
	const dispatch = useDispatch()

	const [qty, setQty] = useState(1)
	const [img, setImg] = useState(null)
	const {id, name, price, slug, images, categories, createdAt, description} = product
	
	// Set image url to null when component renders
	useEffect(() => {
	  setImg(null)
	}, [slug])
	
	const handleAdd = () => {
		dispatch(addProduct({
			id,
			name,
			price,
			slug,
			images,
			quantity: 1
		}))
		// dispatch(increase({quantity: qty}))
	}

	return (
	<>
		<Head>
			<title>NEXTERCE | {name}</title>
		</Head>

		<div className='flex flex-col items-center'>
			{/* Product Details Container */}
			<div className='flex flex-row w-full p-4 px-6'>
				{/* Product Images Section */}
				<div className='flex flex-col w-1/3 items-center space-y-6'>
					<div className='p-2 bg-gray-200 hover:bg-transparent rounded-lg transition duration-300'>
						<Image className=' transition duration-300 w-72 h-72 bg-cover bg-center rounded-lg'
							src={img ? img : images[0].url}
							alt={'Product Image'}
							width={280}
							height={280}
							unoptimized
						/>
					</div>
					<div className='flex flex-row space-x-4 transition duration-300'>
						{images.map((image, index) => (
							<div className='p-2 bg-gray-400 hover:bg-transparent rounded-lg transition' key={index} onMouseEnter={() => setImg(image.url)}>
								<Image className='w-12 h-12'
									src={image.url}
									alt={'Sub Images'}
									width={60}
									height={60}
									unoptimized
								/>
							</div>
						))}
					</div>
				</div>
				{/* END Product Images Section */}

				{/* Product Details Section */}
				<div className='flex flex-col space-y-4 w-2/3 px-6'>
					<h1 className='text-4xl text-gray-800 font-medium dark:text-gray-100'>{name}</h1>
					<div className='flex items-center space-x-2 mb-2'>
						<div className='flex'>
							<AiFillStar color='#2ba2ca' /> <AiFillStar color='#2ba2ca' /> <AiFillStar color='#2ba2ca' /> <AiOutlineStar />
						</div>
						<span>(16 review)</span>
					</div>
					<div>
						<h2 className='text-xl text-gray-800 font-medium dark:text-gray-100 mb-1'>Details: </h2>
						<p className='text text-gray-700 dark:text-gray-200'>
							{description}
						</p>
					</div>
					{/* Price */}
					<div>
						<h2 className='text-2xl text-[#0192c2] dark:text-[#0192c2] font-semibold'>${price}</h2>
					</div>
					{/* Quantity Settings */}
					{/* <div className='flex items-center my-2'>
						<span className='text-lg font-medium'>Quantity </span>
						<div>
							<button className='font-semibold px-3 p-1 mx-3 border border-red-500 rounded-full' onClick={() => setQty(prev => prev != 0 ? prev - 1 :  0)}> - </button>
							<span className='text-lg font-semibold'>{qty}</span>
							<button className='font-semibold px-3 p-1 mx-3 border border-[#0192c2] rounded-full' onClick={() => setQty(prev => prev + 1)}> + </button>
						</div>
					</div> */}
					{/* Options  */}
					<div className='flex space-x-6 pt-6'>
						<button className='font-medium bg-[#0192c2] text-gray-100 px-4 p-2 shadow drop-shadow rounded-sm uppercase' onClick={() => handleAdd(1)}>Add to cart</button>
						<button className='font-medium text-gray-800 dark:text-gray-100 border border-[#016e92] px-4 p-2 rounded-sm uppercase cursor-pointer' onClick={()=>router.push('/')}>Continue shopping</button>
					</div>
				</div>
				{/* END Product Details Section */}
			</div>
			
			{/* Suggested products slide animation */}
			{related.length ?
				<div className="w-full overflow-x-hidden mt-24">
					<h1 className="text-3xl font-medium my-6">You May Also Like</h1>
					<div className="flex items-center justify-center gap-7 animate-marquee-thunder md:animate-marquee-faster xl:animate-marquee-fast hover:pause w-[100%]">
						{related.map(product => (
							<Link href={product.slug} key={product.slug} >
								<div className='p-2 bg-gray-200 dark:bg-gray-700 hover:scale-110  hover:-translate-y-2 dark:hover:-translate-y-2 hover:bg-transparent dark:hover:bg-transparent rounded-lg transition' key={product.slug}>
									<Image className='w-36 h-36'
										src={product.images[0].url}
										alt={'Sub Images'}
										width={60}
										height={60}
										unoptimized
									/>
								</div>
							</Link>
						))}
					</div>
				</div>
				: null
			}
			{/* END Suggested products slide animation */}
		</div>
	</>
	)
}

export default ProductDeatils