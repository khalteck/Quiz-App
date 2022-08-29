import React from "react"
import Quest from "./Quest"
import Navbar from "./Navbar"

export default function HomePage() {
    const [questData, setquestData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setquestData(data.results)) //data.results is an array of 5 objects
    }, [])

    const eachQuestion = questData.map(item => {
        return (
            <Quest
                key={item.correct_answer}
                item={item}
                questDataArr={questData}
            />
        )
    })
    return (
        <main className="flex justify-center pb-[90px] sm:pb-[50px] sm:pt-[70px] pt-[50px]">
            <Navbar/>
            <section className="w-full sm:w-[550px]">
                {eachQuestion}
                <div className="w-full text-center">
                    <button 
                    className="mt-3 py-3 px-8 bg-fuchsia-900 hover:bg-fuchsia-600 text-white text-[13px] rounded-lg shadow-md"
                    >Check answers</button>
                </div>
            </section>
        </main>
    )
}