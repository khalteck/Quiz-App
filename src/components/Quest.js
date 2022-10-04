import React from "react"
import Option from "./Option"

export default function Quest(props) {

  //let randomOptions = randomArrayShuffle(props.optionsJioned[props.index]);
  
    const options = props.optionsJoined[props.index]?.map(item => {
        return (<Option
            key={item}
            item={item}
        />)
    })
    //console.log(options)

    return (
        <div className="py-4 mb-[22px] border-b-2 border-rose-200">
            <h1 className="font-[700] text-[20px] mb-3">{props.item.question}</h1>
            <div className="w-full flex gap-4 flex-wrap">
                {options}
            </div>
        </div>
    )
}