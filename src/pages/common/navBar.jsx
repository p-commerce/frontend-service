import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
export default function Navbar(){
    return(
        <div className="bg-white h-[10vh] w-full flex justify-between p-7" >
        <div>*p logo</div>
        <div>
            <a href="/cart" className="pr-5 font-semibold"> <AiOutlineShoppingCart className="inline" /> Cart </a>
            <a href="/signUp" className="pr-5 font-semibold">Manage</a>
            <a href="/logIn" className="font-semibold "> Stats</a>
        </div>
        </div>
    )
}