import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	CartProducts: [],
	totalCartAmount: 0,
	totalCartCount: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getTotals: state => {
			let amount 	= 0
			let count 	= 0
			state.CartProducts.forEach(item => {
				count  += item.quantity
				amount += item.quantity * item.price
			})
			state.totalCartAmount = amount
			state.totalCartCount  = count
		},
		addProduct: (state, action) => {
			const product = state.CartProducts.find(item => item.id === action.payload.id)
			if (!product) {
				state.CartProducts.push(action.payload)
				state.totalCartAmount += action.payload.price
			}		
		},
		remove: (state, action) => {
			state.CartProducts = state.CartProducts.filter(item => item.id !== action.payload.id)
			state.totalCartCount -= action.payload.quantity
		},
		increase: (state, action) => {
			// state.totalCartCount += 1
			const product = state.CartProducts.find(item => item.id === action.payload.id)
			console.log(product);
			product.quantity += 1
		},
		decrease: (state, action) => {
			const product = state.CartProducts.find(item => item.id === action.payload.id)
      	product.quantity -= 1
		},
		clear: state => {
			state.CartProducts = []
		}
	}
})

export const { addProduct, remove, increase, decrease, getTotals, clear } = cartSlice.actions

export const selectProducts 	= state => state.cart.CartProducts
export const selectAmount 		= state => state.cart.totalCartAmount
export const selectCount 		= state => state.cart.totalCartCount

export default cartSlice.reducer
