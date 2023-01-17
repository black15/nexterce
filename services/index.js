import request, { GraphQLClient, gql } from "graphql-request";

const graphQL_API = process.env.NEXT_PUBLIC_HYGRAPH_URL

export const getProducts = async () => {

	const query = gql`
		query {
			products {
				createdAt
				description
				id
				name
				price
				slug
				categories {
					name
					slug
				}
				images {
					url
				}
			}
		}
	`

	const data = await request(graphQL_API, query)
	return data.products;
} 