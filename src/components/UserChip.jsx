import { Link } from "react-router-dom"
import { useState } from "react";


export default function UserChip({username, action}){
    const [dropdown, setDropdown] = useState(false)
    const logOut = () => {
        action()
    }

    return(
        <div className="relative inline-flex open">
            <button onClick={() => setDropdown(!dropdown)} type="button" className=" h-8 py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50  transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <img className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Maria" />
                <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">{username}</span>
                <svg className=" w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            <div className={`absolute min-w-[130px] top-8 transition-[opacity,margin] duration -open:opacity-100 block bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 ${dropdown ? 'block' : 'hidden'}`}>
                <Link className="block py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    Profile
                </Link>
                <Link className="block py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    Wishlist
                </Link>
                <p onClick={logOut} className=" cursor-pointer block py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    Logout
                </p>
            </div>
        </div>
    )
}