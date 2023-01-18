import request, { GraphQLClient, gql } from "graphql-request";

const graphCMS_API 	= process.env.NEXT_PUBLIC_HYGRAPH_URL
const graphCMS_TOKEN = process.env.HYGRAPH_ACCESS_TOKEN

const client = new GraphQLClient(graphCMS_API)

client.setHeader('authorization', `Bearer ${graphCMS_TOKEN}`)

export const getSliderImages = async () => {
	const query = gql`
		query {
			heroImageConnection {
				edges {
					node {
						images {
							url
							id
						}
					}
				}
			}
		}
	`
	const data = await client.request(query)
	return data.heroImageConnection.edges[0].node;
}

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
	const data = await client.request(query)
	return data.products;
} 

export const getProductBySlug = async (slug) => {

	const query = gql`
		query GetProductBySlug($slug: String!) {
      	products(where: {slug: $slug}) {
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
	const data = await client.request(query, {slug})
	return data.products;
}