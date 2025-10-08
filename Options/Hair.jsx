import React from "react"
import { hair } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function Hair() {

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)
    
    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-list">
            <button onClick={() => setQuestion([hair.black, "hair", "black"])}>Black</button>
            <button onClick={() => setQuestion([hair.brown, "hair", "brown"])}>Brown</button>
            <button onClick={() => setQuestion([hair.blonde, "hair", "blonde"])}>Blonde</button>
            <button onClick={() => setQuestion([hair.orange, "hair", "orange"])}>Orange</button>
            <button onClick={() => setQuestion([hair.gray, "hair", "gray"])}>Gray</button>
        </div>
    )
}