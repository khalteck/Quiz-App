import React from "react"
import Quest from "./Quest"
import Navbar from "./Navbar"

export default function HomePage() {
    const [questData, setquestData] = React.useState({
        questionBox: [],
        score: 0,
        response: 0
    })
    const [isFecthing, setIsFetching] = React.useState(true)
    const [error, setError] = React.useState(null)


    //to fetch data from trivia api
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => {
                    //console.log(data)
                    setquestData({
                        questionBox: data.results,
                        score: 0,
                        response: 0
                    });
                    setIsFetching(false);
                    setError(null)
                })//data.results is an array of 5 objects
            .catch(error => {
                    console.log("unable to fetch data");
                    setError(error.message)
                    setIsFetching(false);
                })

    }, [])


    //need to create an allOptions array, push in all incorrect answers and correct asnwer in random order
    const [optionsJoined, setOptionsJoined] = React.useState([])
    
     //to randomize the options array
    function randomArrayShuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    }
    

    //console.log(questData)
    React.useEffect(() => {
        function allOptions() {
            let correctAnswers = questData.questionBox?.map((item) => item.correct_answer) //array of all 5 correct answers
            let wrongAnswers = questData.questionBox?.map(item => item.incorrect_answers) //array of all 5 arrays of incorrect answers
            return wrongAnswers?.map((item, index) => {
                return (
                    randomArrayShuffle(item.concat(correctAnswers[index]))
                )
            })
        } 
        setOptionsJoined(allOptions())//setting optionsJoined to an array off 5 joined options arrayss
    }, [questData])
    //console.log(questData)
    

    //function to calculate scores and responses
    function calcScores(answer, correctAns) {
        if (answer === correctAns) {
            setquestData(prevState => {
                return {
                    ...prevState,
                    score: questData.score + 1
                }
            });
        }
        setquestData(prevState => {
            return {
                ...prevState,
                response: questData.response < 5 ? questData.response + 1 : 5
            }
        });
    }


    //to map over questdata array 
    const eachQuestion = questData.questionBox?.map((item, index) => {
        return (
            <Quest
                key={item.question}
                item={item}
                index={index}
                optionsJoined={optionsJoined}
                selected={answer => {
                    calcScores(answer, questData.questionBox.correct_answer);
                    console.log(questData.response)
                    console.log(questData.score)
                }}
            />
        )
    }) 


    return (
        <main className="flex justify-center pb-[90px] sm:pb-[50px] sm:pt-[70px] pt-[50px]">
            <Navbar/>
            <section className="w-full sm:w-[550px]">
                {isFecthing && <div className="w-full h-[200px] flex justify-center items-center text-[30px] font-[700]">Loading...</div>}
                {error && <div className="w-full h-[200px] flex justify-center items-center text-center text-[30px] font-[700]">Unable to connect<br/> Refresh the browser to try again..</div>}
                {questData.questionBox && eachQuestion}
                <div className="w-full text-center">
                    { questData.questionBox && <button 
                    className="mt-3 py-3 px-8 bg-fuchsia-900 hover:bg-fuchsia-600 text-white text-[13px] rounded-lg shadow-md"
                    >Check answers</button>}
                </div>
            </section>
        </main>
    )
}