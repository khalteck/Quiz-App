import React from "react"
import Option from "./Option"

export default function Quest(props) {

   /* const [optionArr, setOptionArr] = React.useState([])
    //to map over incorrect answers and display an option component for each
    //console.log(props.allOptionProp)
    
    React.useEffect(() => {
        function moveArr() {
            let each = props.allOptionProp.map(item => item)
            return each
        }
       //setOptionArr(moveArr())
    }, [props.allOptionProp])*/
    
    
   
   /*const eachOption = optionArr.map(item => {
        return (
            item.map(itm => {
                return (
                    <Option
                        {...itm}
                    />
                )
            })
        )
   })*/
   
    const incorrect = props.item.incorrect_answers.map(item => {
        return (<Option
            key={item}
            item={item}
        />)
    })
   
    return (
        <div className="py-4 mb-[22px] border-b-2 border-rose-200">
            <h1 className="font-[700] text-[20px] mb-3">{props.item.question}</h1>
            <div className="w-full flex gap-4 flex-wrap">
                {incorrect}
                <button 
                    className=" bg-fuchsia-50 hover:bg-rose-400 hover:text-white border border-fuchsia-700 text-[13px] px-5 pt-[3px] rounded-xl shadow-md"
                >{props.item.correct_answer}</button>
            </div>
        </div>
    )
}