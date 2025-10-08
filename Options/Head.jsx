import React from "react"
import { head } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function Head() {

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)
    
    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-list">
            <button onClick={() => setQuestion([head.any, "head", "none"])}>Any</button>
            <button onClick={() => setQuestion([head.glasses, "head", "glasses"])}>Glasses</button>
            <button onClick={() => setQuestion([head.hat, "head", "hat"])}>Hat</button>
            <button onClick={() => setQuestion([head.bowBand, "head", "bow/headband"])}>Bow/Headband</button>
        </div>
    )
}