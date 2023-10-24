import { useEffect, useState } from "react";

export default function useFetchQuery(url){
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then( res => {
            if(res.ok){
                return res.json()
            } else {
                setError(true)
            }
        })
        .then(data => setProducts(data))
        .then(() => setLoading(false))
        .catch(error => setError(true))               
    },[url])

  

    return [loading, error, products]

}