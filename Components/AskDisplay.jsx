import React from "react"
import { LayoutContext } from "./Layout"
import { selectCharacter } from "../Functions/selectCharacter"
import { coin } from "../images64"


export default function AskDisplay() {

    const { 
        askQuestion, price, setPrice, charactersLeft, setRow1, 
        setRow2, setRow3, setRow4, setActive, setAskOption, 
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
        setAskOption("")
        console.log(askQuestion[1])
        console.log(askQuestion[2])
        console.log(askQuestion[3])
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