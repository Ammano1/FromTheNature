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
			state.items.push({
				id: newItem.id,
				name: newItem.name,
				price: newItem.price,
				quantity: newItem.quantity,
				totalItemPrice: newItem.totalItemPrice,
			});
			console.log(newItem);
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
