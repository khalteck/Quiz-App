import React from "react"

export default function Option(props) {
    
    
    return (
        <div>
            <button 
                onClick={() => props.handleClick(props.index)}
                className={`${props.clicked[props.index] ? "bg-fuchsia-700" : "bg-fuchsia-50"} hover:bg-rose-400 hover:text-white border border-fuchsia-700 text-[13px] px-7 py-[7px] rounded-md shadow-md leading-tight`}
            >{props.item}</button>
            
        </div>
    )
}