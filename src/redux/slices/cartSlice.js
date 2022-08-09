import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
}

const updateTotalCart = (state) => {
    state.totalQuantity = state.items.reduce((quantity, obj) => obj.quantity + quantity, 0);
    state.totalPrice = state.items.reduce((price, obj) => obj.totalPrice + price, 0);
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find((obj) => {
                return (obj.id === action.payload.id) &&
                       (obj.type === action.payload.type) &&
                       (obj.size === action.payload.size)
            });

            if(findItem) {
                findItem.quantity++;
                findItem.totalPrice = findItem.price * findItem.quantity;
            } else {
                state.items.push({...action.payload, quantity: 1, totalPrice: action.payload.price});
            }

            updateTotalCart(state);
        },
        minusItem: (state, action) => {
            const findItem = state.items.find((obj) => {
                return (obj.id === action.payload.id) &&
                    (obj.type === action.payload.type) &&
                    (obj.size === action.payload.size)
            });

            if(findItem.quantity > 1) {
                findItem.quantity--;
                findItem.totalPrice = findItem.price * findItem.quantity;
            }

            updateTotalCart(state);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((obj) => {
                return !((obj.id === action.payload.id) &&
                    (obj.type === action.payload.type) &&
                    (obj.size === action.payload.size))
            });

            updateTotalCart(state);
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
    }
})

export const {addItem, minusItem, removeItem, clearItems} = cartSlice.actions;
export default cartSlice.reducer;