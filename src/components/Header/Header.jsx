import React, { useEffect, useState } from "react";
import {Logo, Navigation, Button, BurgerIcon, LoginModal} from '../index'
import CartIcon from "../CartIcon";
import { useDispatch } from "react-redux";
import { showLogin } from "../../store/modalSlice";
import { useSelector } from "react-redux";
import { getCookie, deleteCookie } from "../../utils/cookies";
import UserChip from "../UserChip";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


export default function Header(){
    const [user, setUser] = useState('')
    const token = getCookie('token');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginModalShow =  useSelector(state => state.modal.modals.showLoginModal)
    const logout = () => {
        deleteCookie('token')
        setUser('')
        navigate('/')
    }
    const loginAction = () => {
        dispatch(showLogin())
    }
    useEffect(() => {
        if(token !== null){
            const {user} = jwtDecode(token)
            setUser(user)
        }
        
    })
    
 
    return(
            <>
            <LoginModal show={loginModalShow}/>
            <header className="relative w-full bg-white z-10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div className="inline-flex items-baseline space-x-1">
                        <Logo/>
                    </div>
                    <div className="hidden grow items-start lg:flex">
                        <Navigation/>
                    </div>
                    <div className="hidden space-x-2 lg:flex items-center" >
                        {token == null ? <Button name="LogIn" modalAction={loginAction}/> : <UserChip username={user} action={logout}/>}
                        <CartIcon/>
                    </div>
                    <div className="lg:hidden">
                        <BurgerIcon/>
                    </div>
                </div>
            </header>
        </>
        
    )
}