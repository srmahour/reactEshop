import { useSelector, useDispatch } from "react-redux"
import { removeProduct, increaseQuant, decreaseQuant } from "../store/cartSlice";
import { useEffect, useState } from "react";

export default function Cart(){
    const products = useSelector((store) => store.cart.products);
    let total = products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    const totalItem = products.reduce((acc, curr) => acc + curr.quantity, 0 )
    const dispatch =  useDispatch();
    
    console.log(products)
    
    const removeCartItem = (e, productId) => {
        e.preventDefault(); 
        dispatch(removeProduct(productId))
    }

    const incrase = (e, producId) => {
        e.preventDefault();
        dispatch(increaseQuant(producId))
    }

    const decrase = (e, producId, productQuant) => {
        e.preventDefault();
        if(productQuant > 1){
            dispatch(decreaseQuant(producId))
        }
    }

  
    
    //const updateQuant = 

    return(
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Shopping Cart
                </h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>
                        <ul role="list" className="divide-y divide-gray-200">
                            {products && products.map(({id,image,price,quantity,title}) => (
                                <div key={id}>
                                <li className="flex py-6 sm:py-6 ">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={image}
                                            alt={title}
                                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm">
                                                    <a href={`/shop/${id}`} className="font-semibold text-black">
                                                        {title}
                                                    </a>
                                                    </h3>
                                                </div>
                                                
                                                <div className="mt-1 flex items-end">
                                                    {/* <p className="text-xs font-medium text-gray-500 line-through">
                                                    65555
                                                    </p> */}
                                                    <p className="text-sm font-medium text-gray-900">
                                                    {new Intl.NumberFormat('en-US',{style: 'currency',currency: 'INR'}).format(price)}
                                                    </p>
                                                    {/* <p className="text-sm font-medium text-green-500">{product.discount}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <div className="mb-2 flex">
                                    <div className="min-w-24 flex">
                                        <button type="button" className="h-7 w-7" onClick={(e) => decrase(e, id, quantity)}>
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            className="mx-1 h-7 w-9 rounded-md border text-center"
                                            value={quantity}
                                            readOnly
                                            
                                        />
                                        <button type="button" className="flex h-7 w-7 items-center justify-center" onClick={(e) => incrase(e, id)}>
                                            +
                                        </button>
                                    </div>
                                    <div className="ml-6 flex text-sm">
                                        <button type="button" onClick={(e) => removeCartItem(e, id) } className="flex items-center space-x-1 px-2 py-1 pl-0">
                                            🗑️
                                            <span className="text-xs font-medium text-red-500">Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            ))}
                            
                        </ul>
                    </section>
                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                    >
                        <h2
                        id="summary-heading"
                        className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                        >
                        Price Details
                        </h2>
                        <div>
                            <dl className=" space-y-1 px-2 py-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-800">Price ({totalItem} item)</dt>
                                    <dd className="text-sm font-medium text-gray-900">{new Intl.NumberFormat('en-US',{style: 'currency',currency: 'INR'}).format(total)}</dd>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <dt className="flex items-center text-sm text-gray-800">
                                        <span>Discount</span>
                                    </dt>
                                    <dd className="text-sm font-medium text-green-700">- {new Intl.NumberFormat('en-US',{style: 'currency',currency: 'INR'}).format(325)}</dd>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <dt className="flex text-sm text-gray-800">
                                        <span>Delivery Charges</span>
                                    </dt>
                                    <dd className="text-sm font-medium text-green-700">Free</dd>
                                </div>
                                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                    <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                    <dd className="text-base font-medium text-gray-900">{new Intl.NumberFormat('en-US',{style: 'currency',currency: 'INR'}).format(total - 325)}</dd>
                                </div>
                            </dl>
                            <div className="px-2 pb-4 font-medium text-green-700">
                                You will save {new Intl.NumberFormat('en-US',{style: 'currency',currency: 'INR'}).format(325)} on this order
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}