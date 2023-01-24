/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectAmount, selectProducts, clear } from "../store/cartSlice"
import CartDetails from "../components/ui/cart";
import cartSVG from '../public/img/cart.svg'

function Cart() {
	
	const router = useRouter()
	// redux dispatch and selectors
	const dispatch = useDispatch()
	const products = useSelector(selectProducts)
	const amount   = useSelector(selectAmount)
	
  	return (
		<>{
		products.length 
			? <>
				<div className="overflow-x-auto shadow-md sm:rounded-lg mt-16">
					<table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									<span className="sr-only">Image</span>
								</th>
								<th scope="col" className="px-6 py-3">
									Product
								</th>
								<th scope="col" className="px-6 py-3">
									Qty
								</th>
								<th scope="col" className="px-6 py-3">
									Price
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{products.map(product => (
								<CartDetails key={product.id} product={product} />
							))}
						</tbody>
					</table>

					<div className="w-full text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
						<div className="flex justify-end font-bold space-x-4 text-2xl px-5 py-4">
							<div>Total</div>
							<div className="flex text-blue-600">$ <span x-text="total.toFixed(2)">{amount}</span></div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between w-full">
					<div className='flex space-x-6 pt-6'>
						<button className='flex space-x-2 font-medium bg-[#0192c2] text-gray-100 px-4 p-2 shadow drop-shadow rounded-sm uppercase' onClick={() =>{}}>
							<span>Purchase</span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>
						</button>
						<button className='font-medium text-gray-700 dark:text-gray-100 border dark:border-[#016e92] px-4 p-2 shadow rounded-sm uppercase cursor-pointer' onClick={()=>router.push('/')}>Continue shopping</button>
					</div>
					<button className='flex space-x-2 font-medium text-red-500 dark:text-gray-50 dark:bg-gray-500 px-4 p-2 shadow drop-shadow rounded-sm uppercase' onClick={() =>{dispatch(clear())}}>
						<span>Clear</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				</div>
			</>
			: <div className="flex flex-col space-y-6 items-center mt-16">
					<h1 className="px-6 text-2xl font-medium">
						Your shopping cart is empty.
					</h1>
					<Image
						src={cartSVG}
						alt='cart svg'
						width={150}
						height={150}
					/>
			  </div>
		}</>
  )
}

export default Cart