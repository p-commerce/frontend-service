import React from "react";
import SideBar from "./common/sideBar";
import Navbar from "./common/navBar";
export default function Dashboard(){
    return(
        <div className="bg-[#F9F9F9] w-[100%] h-[100vh]">
                <Navbar />

                <div className="flex">
                <SideBar />
                <div>
                    <div className="flex justify-between m-10">
                <div className=" ">
                    <a href="/manage" className="pr-10">Manage</a>
                    <a href="/calendar">Calendar</a>
                </div>
                <div>
                    <button className="bg-[#FF8686] mx-5 px-[3em] py-1 text-white"> <a href="/form"> Add</a></button>
                    <button className="border-[1px] border-[#FF8686] px-10 py-1 text-[#FF8686] mr-[-2em]">Remove</button>
                </div>
                </div>
                <div className="w-[100%]">
                <table className="bg-[#FFE4E4] border-[1.5px] border-[#FF8686] ml-10">
      <tr className="">
        <td className="px-10 py-6">Column 1</td>
        <td className="px-10 py-6">Column 2</td>
        <td className="px-10 py-6">Column 3</td>
        <td className="px-10 py-6">Column 4</td>
        <td className="px-10 py-6">Column 5</td>
        <td className="px-10 py-6">Column 6</td>
        <td className="px-10 py-6">Column 7</td>
        <td className="px-10 py-6">Column 8</td>
      </tr>
      <tr>
        <td className="px-10 py-6">Row 1</td>
        <td className="px-10 py-6">Row 1</td>
        <td className="px-10 py-6">Row 1</td>
        <td className="px-10 py-6">Row 1</td>
        <td className="px-10 py-6">Row 1</td>
        <td className="px-10 py-6">Row 1</td>
        <td className="px-10 py-6">Row 1</td>
        <td className="px-10 py-6">Row 1</td>
      </tr>
      <tr>
        <td className="px-10 py-6">Row 2</td>
        <td className="px-10 py-6">Row 2</td>
        <td className="px-10 py-6">Row 2</td>
        <td className="px-10 py-6">Row 2</td>
        <td className="px-10 py-6">Row 2</td>
        <td className="px-10 py-6">Row 2</td>
        <td className="px-10 py-6">Row 2</td>
        <td className="px-10 py-6">Row 2</td>
      </tr>
      <tr>
        <td className="px-10 py-6">Row 3</td>
        <td className="px-10 py-6">Row 3</td>
        <td className="px-10 py-6">Row 3</td>
        <td className="px-10 py-6">Row 3</td>
        <td className="px-10 py-6">Row 3</td>
        <td className="px-10 py-6">Row 3</td>
        <td className="px-10 py-6">Row 3</td>
        <td className="px-10 py-6">Row 3</td>
      </tr>
     </table>
                </div>
                </div>
                </div>
        </div>
    )
}