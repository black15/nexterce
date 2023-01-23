import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import cartSlice from './cartSlice'

const reducers = combineReducers({
	cart: cartSlice,
})

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

// create a store
export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk]
 })