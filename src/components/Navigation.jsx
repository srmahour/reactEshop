import { Link } from "react-router-dom"

export default function Navigation(){
    return(
        <ul className="ml-12 inline-flex space-x-8">
            <li>
                <Link to={`/`} className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                    Home
                </Link>
            </li>
            <li>
                <Link to={`shop`} className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                    Shop
                </Link>
            </li>
            <li>
                <Link to={`contact`} className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                    Contact
                </Link>
            </li>
        </ul>
    )
}