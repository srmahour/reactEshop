import { useEffect, useState } from "react";


export default function Pagination({pagefun}){
    const [perPage, setParPage] =  useState(10)
    const [offset, setOffset] = useState(0)

    useEffect(() =>{
        pagefun(perPage, offset)
    }, [offset])

    const next = (e) => {
        e.preventDefault()
        setOffset(offset + perPage)
    }
    const prev = (e) => {
        e.preventDefault()
        if(offset >= perPage){
            setOffset(offset - perPage)    
        }
    }

    const parPageFun = (count) =>{
        setParPage(count);
        pagefun(count, offset)
    }

    
    // if(loading){
    //     return(
    //             <div role="status" className="animate-pulse mt-5">
    //                 <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
    //                 <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
    //                 <span className="sr-only">Loading...</span>
    //             </div>
    //     )
    // }
    
    
    return(
            <div className="flex items-center justify-center grow w-full py-4">
                <button
                    type="button"
                    className={`mx-1 text-sm font-semibold text-gray-900 ${offset >= perPage ? '' : 'cursor-not-allowed'}`}
                    disabled={offset >= perPage ? false : true}
                    onClick={(e) => prev(e)}
                >
                    ← Previous
                </button>
                
                <select className=" mx-2" value={perPage} onChange={(e) => { parPageFun(Number(e.target.value)) }}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
                
                <button type="button" className="mx-2 text-sm font-semibold text-gray-900" onClick={(e) => next(e)}>
                    Next →
                </button>
            </div>
    )
}