import { useEffect } from "react";
import { getCookie } from "../utils/cookies";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({children}){
    const navigate = useNavigate();
    const token = getCookie('token')
    if(token == null){
        useEffect(() =>{
            navigate('/')
        }, [])
        
        return null
    }

    return children
    
}