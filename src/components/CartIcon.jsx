import { Provider, useSelector } from "react-redux";
import { Link} from "react-router-dom";


export default function CartIcon(){
    const products = useSelector((store) => store.cart.products)
    const totalItem = products.reduce((acc, curr) => acc + curr.quantity, 0 )
    return <Link to={`cart`} className=" text-2xl">🛒<span className=" text-sm bg-green-500 px-1 text-white rounded-full aspect-square">{totalItem}</span></Link>
}