import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import uiSlice from './ui-slice';
import orderSlice from './order-slice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		ui: uiSlice,
		order: orderSlice,
	},
});

export default store;
