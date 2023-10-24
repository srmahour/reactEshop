import React from "react";
import { Header, Footer } from "../components/index";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
            <Header />
                <Outlet/>
            <Footer/>
        </>
    )   
}