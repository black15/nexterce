import Image from 'next/image';
import { useRouter } from 'next/router'
import {useState} from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { getProductBySlug, getProducts } from '../../services'

export default function Product({product}) {

	const router = useRouter()
	const {id, name, price, slug, images, categories, createdAt, description} = product[0]
	const [qty, setQty] = useState(0)
	const [img, setImg] = useState(null)

	return (
		<div className='flex flex-col items-center'>
			{/* Product Details Container */}
			<div className='flex flex-row w-full p-4 px-6'>
				{/* Product Images Section */}
				<div className='flex flex-col w-1/3 items-center space-y-6'>
					<div className='p-2 bg-gray-200 hover:bg-transparent rounded-lg transition duration-300'>
						<Image className=' transition duration-300 w-72 h-72 bg-cover bg-center'
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
					<div className='flex items-center my-2'>
						<span className='text-lg font-medium'>Quantity </span>
						<div>
							<button className='font-semibold px-3 p-1 mx-3 border-2 border-red-500 rounded-full' onClick={() => setQty(prev => prev != 0 ? prev - 1 :  0)}> - </button>
							<span className='text-lg font-semibold'>{qty}</span>
							<button className='font-semibold px-3 p-1 mx-3 border-2 border-[#0192c2] rounded-full' onClick={() => setQty(prev => prev + 1)}> + </button>
						</div>
					</div>
					{/* Options  */}
					<div className='flex space-x-6'>
						<button className='font-medium bg-[#0192c2] text-gray-100 px-4 p-2 shadow drop-shadow rounded-sm uppercase'>Add to cart</button>
						<button className='font-medium text-gray-800 dark:text-gray-100 shadow-lg drop-shadow dark:border-2 dark:border-[#016e92] px-4 p-2 rounded-sm uppercase'>Continue shopping</button>
					</div>
				</div>
				{/* END Product Details Section */}
			</div>
		</div>
	)
}

export const getStaticProps = async ({params}) => {
	const product = await getProductBySlug(params.slug) || null
	return {
		props: {
			product,
		}
	}
}

export async function getStaticPaths() {
	// When this is true (in preview environments) don't
	// prerender any static pages
	// (faster builds, but slower initial page load)
	if (process.env.SKIP_BUILD_STATIC_GENERATION) {
	  return {
		 paths: [],
		 fallback: 'blocking',
	  }
	}
 
	// Call an external API endpoint to get posts
	const products = await getProducts()
 
	// Get the paths we want to prerender based on posts
	// In production environments, prerender all pages
	// (slower builds, but faster initial page load)
	const paths = products.map((product) => ({
	  params: { slug: product.slug },
	}))
 
	// { fallback: false } means other routes should 404
	return { paths, fallback: false }
 }