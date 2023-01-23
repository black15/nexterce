import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
 } from "redux-persist"
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"

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
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const store = configureStore({
	  reducer: persistedReducer,
	  middleware: (getDefaultMiddleware) => [
		 ...getDefaultMiddleware({
			serializableCheck: {
			  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		 }),
	  ],
	});
	const persistor = persistStore(store);
	return { store, persistor };
 };