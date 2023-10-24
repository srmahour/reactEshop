import React from "react";
import {Logo, Navigation, Button, BurgerIcon} from '../index'
import CartIcon from "../CartIcon";


export default function Header(){
    return(
        <header className="relative w-full bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-baseline space-x-1">
                    <Logo/>
                </div>
                <div className="hidden grow items-start lg:flex">
                    <Navigation/>
                </div>
                <div className="hidden space-x-2 lg:block">
                    <Button name="SignIn" />
                    <Button name="LogIn"/>
                    <CartIcon/>
                </div>
                <div className="lg:hidden">
                    <BurgerIcon/>
                </div>
            </div>
        </header>
    )
}