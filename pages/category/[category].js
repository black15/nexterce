import Head from "next/head"
import { useRouter } from "next/router"
import ProductCard from "../../components/ui/products/card"
import { getCategories, getProductsByCategories } from "../../services"

export default function Category({products}) {
	const router = useRouter()
	const {category} = router.query

	return (
		<main className="mt-12">
			<Head>
				<title>Nexterce | Store</title>
			</Head>
			<div className="text-lg px-6 my-6">
				<h3><span className="underline">Store</span> &gt; <span className="underline">All Categories</span> &gt; <span className="underline capitalize">{category}</span></h3>
			</div>
			<section className='flex flex-row flex-wrap justify-center'>
				{products.map(product => <ProductCard key={product.id} product={product} />)}
			</section>
	 </main>
	)
}

export const getStaticProps = async ({params}) => {
	const products = await getProductsByCategories(params.category) || null
	return {
		props: {
			products,
		}
	}
}

export async function getStaticPaths() {
	const categories = await getCategories()

	const paths = categories.map((category) => ({
		params: { category: category.slug },

	}))

	return { paths, fallback: 'blocking' }
}