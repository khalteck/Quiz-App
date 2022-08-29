import React from "react"

export default function FirstPage(props) {
    //the state of the first page
    const [firstPageState, setFirstPageState] = React.useState(true)

    function hideFirstPage() {
        setFirstPageState(prevState => !prevState)
    }
    //${firstPageState ? "fixed top-0 left-0" : "hidden"}
    return (
        <div className={`hidden w-full bg-fuchsia-50 h-[100vh] border-b border-[#293264]  justify-center items-center`}>
            <div className="text-center text-[20px] font-[500]">
                <h1 className="text-[35px] font-[900] mb-4 tracking-normal">Quizzical</h1>
                <p>Its quiz time! Test your knowledge. <br/> You can do this.</p>
                <button 
                className="w-full mt-6 py-4 bg-fuchsia-900 hover:bg-fuchsia-600 text-white text-[15px] rounded-lg shadow-lg"
                onClick={hideFirstPage}
                >Start Quiz</button>
                <div className="top-blob"></div>
                <div className="bottom-blob"></div>
            </div>
        </div>
    )
}