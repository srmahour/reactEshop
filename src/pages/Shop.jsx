import useFetchQuery from "../customHook/useFetchQuery"
import config from '../config/config'
import { useState } from "react"
import CardView from '../components/CardView'
import Pagination from "../components/Pagination";



export default function Shop(){
    const [price_min, setPrice_min] = useState(0);
    const [price_max, setPrice_max] = useState(1000);
    const [categoryID, setCategoryID] =  useState('');
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [cloading, cerror, categories] = useFetchQuery(`${config.BaseUrl}/categories`);
    const [loading, error, products] = useFetchQuery(`${config.BaseUrl}/products?offset=${offset}&limit=${limit}&price_min=${price_min}&price_max=${price_max}&categoryId=${categoryID}`);

    const getPage = (newlimit, newoffset) => {
        setLimit(newlimit)
        setOffset(newoffset)
    }

    return(
        <section className="w-full">
            <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
                <div className="md:flex md:flex-row md:justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold">Products {categoryID}</h1>
                    </div>
                    <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
                        <Pagination pagefun={getPage}/>
                    </div>
                </div>
                <hr className="mb-8" />
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
                    <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
                        <div className="pt-6">
                            <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                            <ul className="mt-2">
                                    <li className="flex items-center justify-between py-2">
                                        <div className="flex items-center">
                                            <input
                                                id="All999"
                                                name="Categories"
                                                type="radio"
                                                value={''}
                                                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                                                onChange={() => setCategoryID('')}
                                            />
                                            <label
                                                htmlFor="All999"
                                                className="ml-3 text-sm font-medium text-gray-900"
                                            >
                                            All
                                            </label>
                                        </div>
                                    </li>
                                {categories?.map((category, index) => (
                                    <li key={category.id} className="flex items-center justify-between py-2">
                                        <div className="flex items-center">
                                            <input
                                                id={`${category.name}${category.id}`}
                                                name="Categories"
                                                type="radio"
                                                value={categoryID}
                                                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                                                onChange={() => setCategoryID(category.id)}
                                            />
                                            <label
                                                htmlFor={`${category.name}${category.id}`}
                                                className="ml-3 text-sm font-medium text-gray-900"
                                            >
                                            {(category.name).toUpperCase()}
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-6">
                            <h3 className="text-lg font-semibold text-gray-900">Price</h3>
                            <div className="flex items-center mt-2">
                                <input type="number" min={0} value={price_min} onChange={(e) => setPrice_min(e.target.value)} step="50"  className="w-28 h-10 border border-solid text-center border-gray-200"/>
                                <span className="h-10 w-8 flex items-center justify-center">-</span>
                                <input type="number" max={1000} value={price_max} onChange={(e) => setPrice_max(e.target.value)} step="50" className="w-28 h-10 border border-solid text-center border-gray-200"/>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full rounded-lg border-2 grid gap-3 grid-cols-3 border-dashed p-3 lg:col-span-9 lg:h-full">
                        {products && products.map((product) => (
                            <CardView product={product} loading={loading} error={error} key={(Math.random(6) * 1000)}/>
                        ))}
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}