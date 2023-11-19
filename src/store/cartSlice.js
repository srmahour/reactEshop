import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            const product = action.payload;
            const existingProduct = state.products.find(item => item.id === product.id);
            
            if (existingProduct) {
              existingProduct.quantity += action.payload.quantity; 
            } else {
              state.products.push({ ...product});
            }
        },
        removeProduct:(state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload)
        },
        increaseQuant:(state,action) => {
            state.products = state.products.map((item) => item.id === action.payload ? ({quantity: item.quantity++, ...item}) : ({...item}) )
        },
        decreaseQuant:(state,action) => {
            state.products = state.products.map((item) => item.id === action.payload ? ({quantity: item.quantity--, ...item}) : ({...item}) )
        },
        clearCart: (state, action) => {
            state.products = [];
        },
    }
})

export const {addProduct, removeProduct, increaseQuant, decreaseQuant, clearCart, setCart} = cartSlice.actions
export default cartSlice.reducer