import React from "react"
import { LayoutContext } from "./Layout"
import { selectCharacter } from "../Functions/selectCharacter"
import { coin } from "../images64"


export default function AskDisplay() {

    const { 
        askQuestion, setAskQuestion, setPrice, charactersLeft, setRow1, 
        setRow2, setRow3, setRow4, setActive, setAskOption, 
        setAskDisplay, setCategoryDisplay, setWallet, culprit, setSizeChanging
    } = React.useContext(LayoutContext)

    const parameters = [
        askQuestion[1], askQuestion[2], askQuestion[3], setPrice, charactersLeft, 
        setRow1, setRow2, setRow3, setRow4, setActive, setAskQuestion,
        setAskDisplay, setCategoryDisplay, setWallet, culprit, 
        setSizeChanging, setAskOption
    ]

    function showCategories(){
        setAskDisplay(false)
        setCategoryDisplay(true)
        setAskOption("")
        setAskQuestion([])
    }

    return(
        <div className="ask-display">
            <button className="go-back" onClick={() => showCategories()}>Back</button>
            <div className="question">{askQuestion[0]}</div>
            <button className="ask-button" onClick={() => selectCharacter(...parameters)}>
                <div>Ask!</div>
                <div className="ask-button-price">
                    <img className="ask-coin" src={coin}></img>
                    {askQuestion[3]}
                </div>
            </button>
        </div>
    )
}