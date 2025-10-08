import React from "react"
import { LayoutContext } from "./Layout"
import { selectCharacter } from "../Functions/selectCharacter"

export default function AskDisplay() {

    const { 
        askQuestion, charactersLeft, setRow1, 
        setRow2, setRow3, setRow4, setActive, 
        setCategoryDisplay, setAskDisplay,
    } = React.useContext(LayoutContext)

    const parameters = [
        askQuestion[1], askQuestion[2], charactersLeft, 
        setRow1, setRow2, setRow3, setRow4, setActive
    ]

    function showCategories(){
        setAskDisplay(false)
        setCategoryDisplay(true)
}

    return(
        <div className="ask-display">
            <button onClick={() => showCategories()}>Categories</button>
            <div className="question">{askQuestion[0]}</div>
            <button onClick={() => selectCharacter(...parameters)}>Ask!</button>
        </div>
    )
}