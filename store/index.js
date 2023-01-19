import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

// create a store
export const store = configureStore({
	reducer: {
		cart: cartSlice,
	},
 })