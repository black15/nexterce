/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { selectProducts } from "../store/cartSlice"
import CartDetails from "../components/ui/cart";

function Cart() {
	const products = useSelector(selectProducts)
	
  	return (
		<>{
		products.length 
			? <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
			</div>
			: <div>
					<h1 className="px-6 text-2xl font-medium">Go shop something first</h1>	
			  </div>
		}</>
  )
}

export default Cart