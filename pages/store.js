import Head from "next/head"
import ProductCard from "../components/ui/products/card"
import { getProducts } from "../services"

function Store({products}) {
  return (
	 <main className="mt-12">
	 	<Head>
			<title>Nexterce | Store</title>
		</Head>
		<div className="text-lg px-6 my-6">
			<h3><span className="underline">Store</span> &gt; <span className="underline">All Products</span> </h3>
		</div>
		<section className='flex flex-row flex-wrap justify-center'>
			{products.map(product => <ProductCard key={product.id} product={product} />)}
		</section>
	 </main>
  )
}

export default Store


export const getStaticProps = async () => {
	const products = (await getProducts() || [])
	return {
	  props: {
		 products,
	  }
	}
 }
 