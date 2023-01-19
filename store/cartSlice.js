import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalCartProducts: [],
	totalCartAmount: 0,
	totalCartQty: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			const product = action.payload
			console.log('state', state => state.cart.totalCartProducts);
			return{
				...state,
				totalCartProducts: [...state.totalCartProducts, product]
			}
		},
		defineQty: (state, action) => {
			state.totalCartQty += action.payload
		}
	}
})

export const {addProductToCart, defineQty} = cartSlice.actions

export const selectProducts 	= state => state.cart.totalCartProducts
export const selectAmount 		= state => state.cart.totalCartAmount
export const selectQty 			= state => state.cart.totalCartQty

export default cartSlice.reducer
