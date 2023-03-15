import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    cartIsVisible: false,
    isOrdering: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        toogleOrder(state) {
            state.isOrdering = !state.isOrdering
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer