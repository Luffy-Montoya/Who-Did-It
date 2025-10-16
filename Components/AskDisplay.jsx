import React from "react"
import { LayoutContext } from "./Layout"
import { selectCharacter } from "../Functions/selectCharacter"
import { coin } from "../images64"


export default function AskDisplay() {

    const { 
        askQuestion, setPrice, charactersLeft, 
        setRow1, setRow2, setRow3, setRow4, setActive, setAskQuestion,
        setAskDisplay, setCategoryDisplay, setWallet, culprit, 
        setSizeChanging, setAskOption, toAsk,
        setToAsk, setToCategories, setQuestionAsked, toCategories,
        setOptionsBar, fade, setFade, yesOrNo, setYesOrNo, modalVisible
    } = React.useContext(LayoutContext)

    const parameters = [
        askQuestion[1], askQuestion[2], askQuestion[3], setPrice, charactersLeft, 
        setRow1, setRow2, setRow3, setRow4, setActive, setAskQuestion,
        setAskDisplay, setCategoryDisplay, setWallet, culprit, 
        setSizeChanging, setAskOption, setToAsk, setToCategories, setQuestionAsked,
        setOptionsBar, setYesOrNo
    ]

    function showCategories(){
        setFade(true)
        setToAsk(false)
        setTimeout(() => {
            setAskDisplay(false)
            setCategoryDisplay(true)
            setAskQuestion([])
        }, 250)
        setAskOption("")
        setTimeout(() => {
            setToCategories(true)
        }, 300)
        setOptionsBar("")
    }

    return(
        <div className="ask-display">
            <button className={`go-back ${!toAsk ? "offscreen" : ""}`} onClick={() => showCategories()}>Back</button>
            <div className={`ask-text-container ${!toAsk ? "offscreen" : ""}`}>
                <div className={`question ${fade ? "fade" : !toAsk ?  "offscreen" : ""}`}>{askQuestion[0]}</div>
                <div className={`answer ${fade ? "fade" : !toAsk ?  "" : "offscreen"}`}>{yesOrNo}</div>
            </div>
            <button className={`ask-button ${!toAsk ? "offscreen" : ""}`} onClick={() => selectCharacter(...parameters)}>
                <div>Ask!</div>
                <div className="ask-button-price">
                    <img className={`ask-coin ${modalVisible ? "grayed" : ""}`} src={coin}></img>
                    {askQuestion[3]}
                </div>
            </button>
        </div>
    )
}