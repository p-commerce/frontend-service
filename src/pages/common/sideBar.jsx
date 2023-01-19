import React from "react";
export default function SideBar(){
    const currentPath = window.location.pathname
    return(
        <nav className="flex-col bg-white w-[15%] h-[100vh]">
            <ul className="m-10">
                <li className={currentPath === 'dashboard'? "text-[#EF5555]": "my-5"}> <a href="/dashboard"> Dashboard</a></li>
                <li className={currentPath === 'statics' ? "text-[#EF5555]" : 'mb-5'}> <a href="/statics">Statics</a></li>
                <li className={currentPath === 'notifications' ? "text-[#EF5555]" : 'mb-5'}> <a href="/notification">Notification</a></li>
                <li className={currentPath === 'messages' ? "text-[#EF5555]" : 'mb-5'}> <a href="/messages">Messages</a></li>
                <li className={currentPath === 'settings' ? "text-[#EF5555]" : ''}> <a href="/settings">Settings</a></li>
            </ul>
        </nav>
    )
}