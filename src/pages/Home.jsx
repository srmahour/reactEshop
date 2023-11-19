import { CardView } from "../components/index";
import useFetchQuery from "../customHook/useFetchQuery";
import config from '../config/config'
import { useState } from "react";
import Pagination from "../components/Pagination";
import HeroSearch from "../components/HeroSearch";


export default function Home(){
   
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [title, setTitle] =  useState('')
    const [loading, error, products] = useFetchQuery(`${config.BaseUrl}/products?offset=${offset}&limit=${limit}&title=${title}`);
    
    const getPage = (newlimit, newoffset) => {
        setLimit(newlimit)
        setOffset(newoffset)
    }
   

    return(
        <>
            <HeroSearch searchFun={setTitle} />
            <section className="container mx-auto">
                <div className="flex flex-wrap gap-3 justify-center">
                    {products && products.map((product) => (
                        <CardView product={product} pLoading={loading} pError={error} key={(Math.random(6) * 1000)}/>
                    ))}
                    {}
                     <Pagination pagefun={getPage}/>
                </div>
            </section>
        </>
    )
}