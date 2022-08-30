import React from "react"
import idea from "../images/icons8-idea.svg"

export default function Navbar() {
    return (
        <nav className="w-full z-[2] font-dyna bg-fuchsia-50 h-[60px] sm:h-[50px] fixed bottom-0 sm:top-0 left-0 border-t sm:border-b border-rose-300 shadow-md flex justify-center items-center">
            <div className="flex items-center">
                <h1 className="text-[30px]">Quizzical</h1>
                <img alt="" src={idea} className="w-[40px] h-[40px] ml-2 idea"/>
            </div>
        </nav>
    )
}