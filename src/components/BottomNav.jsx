import { Link } from "react-router-dom"

export default function BottomNav(){
    return(
        <ul className="-m-5 flex flex-wrap items-center">
            <li className="p-5">
                <Link className="font-medium text-gray-600 hover:text-gray-700" to="#">
                    Privacy Policy
                </Link>
            </li>
            <li className="p-5">
                <Link className="font-medium text-gray-600 hover:text-gray-700" to="#">
                    Terms of Service
                </Link>
            </li>
            <li className="p-5">
                <Link className="font-medium text-gray-600 hover:text-gray-700" to="#">
                    Return Policy
                </Link>
            </li>
            <li className="p-5">
                <Link className="font-medium text-gray-600 hover:text-gray-700" to="#">
                    Contact Us
                </Link>
            </li>
        </ul>
    )
}