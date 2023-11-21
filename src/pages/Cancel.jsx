import { Link } from "react-router-dom";


export default function Cancel(){
    return(
        <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 dark:bg-red-800/30 m-auto w-72" role="alert">
                <div className="block">
                    <div className="flex-shrink-0">
                        <span className=" scale-150 inline-flex justify-center items-center w-8 h-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </span>
                    </div>
                    <div className="ms-3 mt-5">
                        <h3 className="text-gray-800 font-semibold dark:text-white">
                            Payment Failed.
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                           Here there. We tried to charge your card but, something went wrong. Please update your payment method below to continue.
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="block text-2xl font-bold text-white"></h1>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                <Link to={`/`} className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    Home
                </Link>
            </div>
        </div>
    )
}