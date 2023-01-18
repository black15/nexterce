import { getProductBySlug, getProducts } from '../../services'
import ProductDeatils from '../../components/ui/product'

export default function Product({product}) {
	return (
		<ProductDeatils product={product[0]}/>
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