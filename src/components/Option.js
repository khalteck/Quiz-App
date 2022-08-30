import React from "react"

export default function Option(props) {
    return (
        <div>
            <button 
            className=" bg-fuchsia-50 hover:bg-rose-400 hover:text-white border border-fuchsia-700 text-[13px] px-5 pt-[3px] rounded-xl shadow-md"
            >{props.item}</button>
            
        </div>
    )
}