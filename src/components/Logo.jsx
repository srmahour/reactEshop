import React from "react";
import { Link } from "react-router-dom";

export default function Logo(){
    return(
        <>
            <Link to={'/'}>
                <span className=' text-2xl'>
                🛍️
                </span>
                <span className="font-bold">ShopNow</span>
            </Link>
        </>
    )
}