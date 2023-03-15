import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
	items: [],
	totalQuanity: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);
			state.totalQuanity += newItem.quantity;
			state.totalPrice += newItem.quantity * newItem.price;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					name: newItem.name,
					price: newItem.price,
					quantity: newItem.quantity,
					totalItemPrice: newItem.totalItemPrice,
				});
			} else {
				existingItem.quantity = existingItem.quantity + newItem.quantity * 1;
				existingItem.totalItemPrice += newItem.price * newItem.quantity;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find(item => item.id === id);
			if (existingItem) {
				state.totalQuanity--;
				state.totalPrice -= existingItem.price;
				if (existingItem.quantity === 1) {
					state.items = state.items.filter(item => item.id !== id);
				} else {
					existingItem.quantity--;
					existingItem.totalItemPrice -= existingItem.price;
				}

				if (state.totalPrice < 0) {
					state.totalPrice = 0;
				}
			}
		},
		removeItemsFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find(item => item.id === id);
			if (existingItem) {
				state.totalQuanity -= existingItem.quantity;
				state.totalPrice -= existingItem.totalItemPrice;
				state.items = state.items.filter(item => item.id !== id);
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
