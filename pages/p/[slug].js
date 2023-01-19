import { getProductBySlug, getProducts, getRelatedProducts } from '../../services'
import ProductDeatils from '../../components/ui/product'

export default function Product({product, relatedProducts}) {

	return (
		<ProductDeatils product={product} related={relatedProducts} />
	)
}

export const getStaticProps = async ({params}) => {
	const product = await getProductBySlug(params.slug) || null
	const relatedProducts = await getRelatedProducts(product.categories[0].id, params.slug) || []

	return {
		props: {
			product,
			relatedProducts,
		}
	}
}

export async function getStaticPaths() {
	// Call API endpoint to get products
	const products = await getProducts()

	// Get the paths we want to prerender based on posts
	// In production environments, prerender all pages
	// (slower builds, but faster initial page load)
	const paths = products.map((product) => ({
		params: { slug: product.slug },
	}))

	return { paths, fallback: 'blocking' }
}