import React from "react"
import FirstPage from "./components/FirstPage"
import HomePage from "./components/HomePage"

export default function App() {
    return (
        <main className="px-[15px] sm:px-0">
            <FirstPage/>
            <HomePage/>
        </main>
    )
}