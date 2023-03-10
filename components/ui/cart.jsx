import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, remove, selectProducts } from "../../store/cartSlice"

function CartDetails({product}) {

	const dispatch = useDispatch()
	const products = useSelector(selectProducts)

	const [qty, setQty] = useState(() => {
		const p = products.find(item => item.id === product.id)
		return p.quantity
	})
	
	const handleInc = () => {
		setQty(prev => prev + 1)
		if (qty >= 1) dispatch(increase({id: product.id}))
	}
	const handleDec = () => {
		if (qty !== 1) setQty(prev => prev - 1)
		if (qty >= 1) dispatch(decrease({id: product.id}))
	}
	const ctrlQty = (newQty) => {
		if (newQty === 1 || !newQty) return 1
		if (newQty > 1) return newQty
	}

	return (
		<tr key={product.id} className="transition bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-900">
			<td className="md:w-32 p-4">
				<Link href={`p/${product.slug}`}>
					<Image 
						src={product.images[0].url}
						alt={'Product Image'}
						width={100}
						height={100}
						unoptimized
					/>
				</Link>
			</td>
			<td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-50">
				{product.name}
			</td>
			<td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-50">
				<div className="flex items-center justify-center space-x-3">
					{qty > 1 && 
					<button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={() => handleDec()}>
							<span className="sr-only">Quantity button</span>
							<svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
					</button>}
					<div>
						<input id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={ctrlQty(qty)} readOnly />
					</div>
					<button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={() => handleInc()}>
							<span className="sr-only">Quantity button</span>
							<svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
					</button>
				</div>
			</td>
			<td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-50">
				{product.price * qty}$
			</td>
			<td className="px-6 py-4">
				<span className="flex items-center justify-center font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => dispatch(remove({id: product.id, quantity: qty}))}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
					</svg>
				</span>
			</td>
		</tr>
	)
}

export default CartDetails