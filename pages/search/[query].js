import { useRouter } from "next/router";


export default function SearchProducts() {
	const router = useRouter()
	const {query} = router.query

	return <p>Post: {query}</p>
}