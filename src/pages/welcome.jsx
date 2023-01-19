import React from "react"
import {SlArrowRight} from "react-icons/sl"
import Navbar from "./common/navBar"
export function Welcome() {
    return(
        <div className="bg-[#F9F9F9] w-[100%] h-[100vh] overflow-hidden">
        <Navbar />
        <div className="pl-[12em] py-[9em]">
            <h1 className=" text-lg font-bold">Welcome Back, Customer!</h1>
            <p className="text-sm text-[#898989] py-1 ">What would you like to do today?</p>
            <ul className="">
                <li className="font-semibold py-2"> <SlArrowRight color="#EF5555" size={12} className="inline" />  <a href="/dashboard">  Manage</a></li>
                <li className="font-semibold"> <SlArrowRight color="#EF5555" size={12} className="inline" />   <a href="/buy">Buy</a></li>
                <li className="font-semibold pt-2"> <SlArrowRight color="#EF5555" size={12} className="inline" />   <a href="/sell">Sell</a></li>
            </ul>
        </div>
        <svg width="1519" height="259" viewBox="0 0 1920 299" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L29 16.9219C58 33.8438 116 67.1041 175 61.8525C233 56.0174 291 11.0868 349 22.757C407 33.8438 465 100.948 524 151.13C582 201.896 640 235.156 698 207.148C756 179.139 815 89.8612 873 50.7657C931 11.0868 989 22.757 1047 61.8525C1105 100.948 1164 168.052 1222 173.887C1280 179.139 1338 123.121 1396 123.121C1455 123.121 1513 179.139 1571 190.809C1629 201.896 1687 168.052 1745 128.957C1804 89.8612 1862 44.9306 1891 22.757L1920 0V269H1891C1862 269 1804 269 1745 269C1687 269 1629 269 1571 269C1513 269 1455 269 1396 269C1338 269 1280 269 1222 269C1164 269 1105 269 1047 269C989 269 931 269 873 269C815 269 756 269 698 269C640 269 582 269 524 269C465 269 407 269 349 269C291 269 233 269 175 269C116 269 58 269 29 269H0V0Z" fill="#FFE4E4"/>
</svg>
        </div>
    )
}