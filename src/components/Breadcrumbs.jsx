import { Link } from "react-router-dom";

export default function Breadcrumbs({title}){
    return(
        <div className="pt-8">
            <div className="flex items-center">
                <ol className="flex w-full items-center overflow-hidden">
                    <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                        <Link className="capitalize" to={`/`}>Home</Link>
                    </li>
                    <li className="text-body mt-0.5 text-base">/</li>
                    <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                        <Link className="capitalize" to={`/shop`}>Shop</Link>
                    </li>
                    <li className="text-body mt-0.5 text-base">/</li>
                    <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                        <Link className="capitalize" to={`#`}>
                            {title}
                        </Link>
                    </li>
                </ol>
            </div>
        </div>
    )
}