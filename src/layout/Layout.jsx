import React from "react";
import { Header, Footer } from "../components/index";
import { Outlet } from "react-router-dom";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearCart, addProduct} from "../store/cartSlice";

export default function Layout(){
    const products =  useSelector((state) => state.cart.products)
    const dispatch =  useDispatch()

    useEffect(() => {
        const cartItem = localStorage.getItem('cart');
        if(cartItem !== null){
            dispatch(clearCart())
            
            // Parse the cartItem and dispatch addProduct for each item
            const parsedCart = JSON.parse(cartItem);
            parsedCart.forEach((product) => {
                dispatch(addProduct(product));
            });

        }
    },[dispatch]);
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products));
    },[products]);

    return(
        <>
            <Header />
                <Outlet/>
            <Footer/>
        </>
    )   
}