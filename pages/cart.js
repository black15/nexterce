import { useSelector } from "react-redux";
import { selectProducts } from "../store/cartSlice"

function Cart() {
	const products = useSelector(selectProducts)
	console.log('cart', products);
  return (
	 <div className="w-full p-4 px-6">
		cart
	 </div>
  )
}

export default Cart