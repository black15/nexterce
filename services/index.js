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
					id
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
	return data.products[0];
}

export const getRelatedProducts = async (id, slug) => {
	const query = gql`
		query GetThisCategoryProduct($id: ID!, $slug: String!) {
			category(where: {id: $id}) {
				products(first: 10, where: {slug_not: $slug}){
					name
					slug
					images {
					url
					}
				}
			}
		}
	`
	const data = await client.request(query, {id, slug})
	return data.category.products
}

export const searchProducts = async (name) => {
	const query = gql`
		query GetProductByName($name: String!) {
      	products(where: {name_contains: $name}) {
				createdAt
				description
				id
				name
				price
				slug
				categories {
					id
					name
					slug
				}
				images {
					url
				}
			}
		}
	`
	const data = await client.request(query, {name})
	return data.products;
}

export const getProductsByCategories = async (slug) => {
	const query = gql`
		query GetProducts($slug: String!) {
			categories(where: {slug: $slug}) {
				products {
					price
					name
					slug
					images {
						id
						url
					}
				}
			}
		}
	`
	const data = await client.request(query, {slug})
	return data.categories[0].products;
}

export const getCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				slug
			}
		}
	`
	const data = await client.request(query)
	return data.categories;
}