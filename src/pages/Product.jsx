import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchQuery from "../customHook/useFetchQuery";
import config from '../config/config'
import Breadcrumbs from "../components/Breadcrumbs";
import { Image } from "../components";
import {addProduct } from "../store/cartSlice"
import {useDispatch} from "react-redux";


export default function Product(){
    let {productId} = useParams();
    const [loading,error, product] = useFetchQuery(`${config.BaseUrl}/products/${productId}`);
    const [curr_quantity, setCurr_quantity] = useState(1);
    const [added, setAdded] =  useState(false);
    const dispatch = useDispatch()
    console.log()

    const increase = (e, id) => {
        e.preventDefault()
        //dispatch(increaseQuant(id))
        setCurr_quantity(curr_quantity + 1)
    }

    const decrease = (e, id) => {
        e.preventDefault()
        if(curr_quantity > 1){
            //dispatch(decreaseQuant(id))
            setCurr_quantity(curr_quantity - 1)
        }
    }
    const addToCart = (e, product) => {
        e.preventDefault()
        
        if(!added){
            dispatch(addProduct({...product}))
            setAdded(true);
            setCurr_quantity(0)
        }

        setTimeout(() => {
            setAdded(false)
        }, [1000])
        
    }
    

    if(loading){
        return(
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }


    if(error){
        return <div className=" p-4 bg-red-400 text-center w-52 mx-auto h-"> Some thing went wrong</div>
    }


   
  
    if(product !== null){
        return (
            <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
                <Breadcrumbs title={product.title} />
                <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
                    <div className="col-span-5 grid grid-cols-2 gap-2.5">
                    {product.images.map((item, index) => (
                        <div key={index+product.price} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                            <Image loading={loading} error={error} url={item} alt={product.title} height="h-72"/>
                        </div>
                    ))}
                    </div>
                    <div className="col-span-4 pt-8 lg:pt-0">
                        <div className="mb-7 border-b border-gray-300 pb-7">
                            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                            {product.title}
                            </h2>
                            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                            {product.description}
                            </p>
                            <div className="mt-5 flex items-center ">
                            <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                                {new Intl.NumberFormat('en-US',{style: 'currency',currency: 'INR'}).format(product.price)}
                            </div>
                            </div>
                        </div>
                        <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                            <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                            <button
                                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                                onClick={(e) => increase(e, product.id, product.quantity)}
                            >
                                +
                            </button>
                            <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                                {curr_quantity}
                            </span>
                            <button 
                            className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                            onClick={(e) => decrease(e, product.id, product.quantity)}
                            >
                                -
                            </button>
                            </div>
                            <button
                                onClick={(e) => addToCart(e,{id:product.id, quantity:curr_quantity, price:product.price, title:product.title, image:product.images[0]})}
                                type="button"
                                disabled={added ? true: false}
                                className={`${added ? 'bg-green-500 hover:bg-green-500 border-green-500 text-white': 'bg-black'} h-11 w-full rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
                                >
                                Add to cart
                            </button>
                        </div>
                        <div className="py-6 ">
                            <ul className="space-y-5 pb-1 text-sm">
                                <li>
                                    <span className="text-heading inline-block pr-2 font-semibold">SKU:</span>
                                    N/A
                                </li>
                                <li>
                                    <span className="text-heading inline-block pr-2 font-semibold">Category:</span>
                                    <Link to={`/category/:${product.category.id}`} className="hover:text-heading transition hover:underline">
                                        {product.category.name}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="shadow-sm ">
                            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                            <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                                Product Details
                            </h2>
                            <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                                <div className="bg-heading h-0.5 w-full rounded-sm" />
                                <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
                            </div>
                            </header>
                            <div>
                            <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                                Our Customer Experience Team is available 7 days a week and we offer 2 ways to get
                                in contact.Email and Chat . We try to reply quickly, so you need not to wait too
                                long for a response!.
                            </div>
                            </div>
                        </div>
                        <div className="">
                            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                            <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                                Additional Information
                            </h2>
                            </header>
                        </div>
                        <div className="">
                            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                            <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                                Customer Reviews
                            </h2>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}