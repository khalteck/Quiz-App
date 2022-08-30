import React from "react"
import Quest from "./Quest"
import Navbar from "./Navbar"

export default function HomePage() {
    const [questData, setquestData] = React.useState([])
    const [isFecthing, setIsFetching] = React.useState(true)
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setquestData(data.results))//data.results is an array of 5 objects
            .then (() => setIsFetching(prevState => !prevState))
    }, [])


    //need to create an allOptions array, push in all incorrect answers and correct asnwer in random order
    const [optionsJoined, setOptionsJoined] = React.useState([])
    
    React.useEffect(() => {
        function allOptions() {
            let correctAnswers = questData.map((item) => item.correct_answer) //array of all 5 correct answers
            let wrongAnswers = questData.map(item => item.incorrect_answers) //array of all 5 arrays of incorrect answers
            return wrongAnswers.map((item, index) => {
                return (
                    item.concat(correctAnswers[index])
                )
            })
        } 
        setOptionsJoined(allOptions())//setting optionsJoined to an array off 5 joined options arrayss
    }, [questData])
    //console.log(optionsJoined)

    //to map over questdata array 
    const eachQuestion = questData.map(item => {
        return (
            <Quest
                key={item.question}
                item={item}
                allOptionProp={optionsJoined}
            />
        )
    }) 
    return (
        <main className="flex justify-center pb-[90px] sm:pb-[50px] sm:pt-[70px] pt-[50px]">
            <Navbar/>
            <section className="w-full sm:w-[550px]">
                {isFecthing ? (<div className="w-full h-[200px] flex justify-center items-center text-[30px] font-[700]">Loading...</div>) : eachQuestion}
                <div className="w-full text-center">
                    <button 
                    className="mt-3 py-3 px-8 bg-fuchsia-900 hover:bg-fuchsia-600 text-white text-[13px] rounded-lg shadow-md"
                    >Check answers</button>
                </div>
            </section>
        </main>
    )
}