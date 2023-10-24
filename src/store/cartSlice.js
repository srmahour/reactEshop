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
              existingProduct.quantity += 1; 
            } else {
              state.products.push({ ...product, quantity: 1 });
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
        }
    }
})

export const {addProduct, removeProduct, increaseQuant, decreaseQuant} = cartSlice.actions
export default cartSlice.reducer