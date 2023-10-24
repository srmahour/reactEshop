import { Banner, CardView } from "../components/index";
import useFetchQuery from "../customHook/useFetchQuery";
import config from '../config/config'
import { useState } from "react";
import Pagination from "../components/Pagination";


export default function Home(){
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [loading, error, products] = useFetchQuery(`${config.BaseUrl}/products?offset=${offset}&limit=${limit}`);
    const getPage = (newlimit, newoffset) => {
        setLimit(newlimit)
        setOffset(newoffset)
    }

    return(
        <>
            <Banner/>
            <section className="container mx-auto">
                <h2 className=" text-4xl text-center my-5">Products</h2>
                <div className="flex flex-wrap gap-3 justify-center">
                    {products && products.map((product) => (
                        <CardView product={product} loading={loading} error={error} key={(Math.random(6) * 1000)}/>
                    ))}
                     <Pagination pagefun={getPage}/>
                </div>
            </section>
        </>
    )
}