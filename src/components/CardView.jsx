import { Link } from 'react-router-dom'
import {Image, ProductSkeleton} from './index'
import { useDispatch } from 'react-redux';
import {addProduct} from '../store/cartSlice'
import { useState } from 'react';

export default function CardView({loading, error, product}){
    const [added, setAdded] =  useState(false);
    const dispatch = useDispatch()
    const addToCart = (e, product) => {
        e.preventDefault()
        
        if(!added){
            dispatch(addProduct({...product}))
            setAdded(true);
        }

        setTimeout(() => {
            setAdded(false)
        }, [1000])
        
    }
    
    if(loading){
        return(
            <ProductSkeleton/>
        )
    }

    if(error){
        return <h1 className=' text-center p-3 col-span-3'>Something went wrong...</h1>
    }
    
    if(!product){
        return <h1 className=' text-center p-3 col-span-3'>There is no products in this category...</h1>
    }

    return(
            <>
                <div className="max-w-[300px] w-full rounded-md border" key={product.id}>
                    <Link to={`/shop/${product.id}`}>
                        <Image url={product.images[0]} height='h-[300px]' />
                    </Link>
                    <div className="p-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">{product.category.name}</span>
                        <h4 className="text-lg font-semibold leading-normal">{product.title}</h4>
                        <p className="my-3 text-sm text-gray-600">{product.description}</p>
                        <h5 className='mb-3 text-base'>${product.price}</h5>
                        <button
                            onClick={(e) => {addToCart(e,{id:product.id, quantity:1, price:product.price, title:product.title, image:product.images[0]})}}
                            type="button"
                            disabled={added ? true: false}
                            className={` ${added ? 'bg-green-500 hover:bg-green-500 border-green-500 text-white': 'bg-white'} rounded-md border border-solid border-black px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
                        >
                            {added ? 'Added': 'Add to cart'}
                        </button>
                    </div>
                </div>
           
            
            </>
    )
}