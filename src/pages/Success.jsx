import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { clearCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export default function Success(){
    const [newSessionId, setNewSessionId] = useState('')
    const [searchParams] = useSearchParams();
    const session_id = searchParams.get("session_id");
    
    const dispatch =  useDispatch()
    
    useEffect(() => {
        setNewSessionId(session_id)
    })
    useEffect(() =>{
        dispatch(clearCart())
    },[newSessionId])


    return(
        <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="bg-teal-50 border-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30 m-auto w-72" role="alert">
                <div className="block">
                    <div className="flex-shrink-0">
                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400 scale-150">
                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        </span>
                    </div>
                    <div className="ms-3 mt-5">
                        <h3 className="text-gray-800 font-semibold dark:text-white">
                           Payment Successfully updated.
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                            You have successfully updated your payment.
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="block text-2xl font-bold text-white"></h1>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                <Link to={`/`} className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    Home
                </Link>
            </div>
        </div>
    )
}