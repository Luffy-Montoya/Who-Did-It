import React from "react"
import { LayoutContext } from "./Layout"
import { selectCharacter } from "../Functions/selectCharacter"

export default function AskDisplay() {

    const { 
        askQuestion, setPrice, charactersLeft, setRow1, 
        setRow2, setRow3, setRow4, setActive, 
        setAskDisplay, setCategoryDisplay, setWallet, culprit
    } = React.useContext(LayoutContext)

    const parameters = [
        askQuestion[1], askQuestion[2], askQuestion[3], setPrice, charactersLeft, 
        setRow1, setRow2, setRow3, setRow4, setActive,
        setAskDisplay, setCategoryDisplay, setWallet, culprit
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