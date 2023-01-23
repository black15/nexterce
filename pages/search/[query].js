import { useRouter } from "next/router"
import { searchProducts } from "../../services"
import Search from "../../components/ui/search"

export default function SearchProducts({products}) {
	console.log(products);
	const router = useRouter()
	const {query} = router.query

	return <Search query={query} products={products} />
}

export const getServerSideProps = async ({params}) => {
	const products = await searchProducts(params.query) || []
	return {
		props: {
			products,
		}
	}
}