import React from "react"
import { shirt } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function Shirt() {

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)
    
    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-list">
            <button onClick={() => setQuestion([shirt.red, "shirt", "red"])}>Red</button>
            <button onClick={() => setQuestion([shirt.blue, "shirt", "blue"])}>Blue</button>
            <button onClick={() => setQuestion([shirt.green, "shirt", "green"])}>Green</button>
            <button onClick={() => setQuestion([shirt.purple, "shirt", "purple"])}>Purple</button>
            <button onClick={() => setQuestion([shirt.pink, "shirt", "pink"])}>Pink</button>
            <button onClick={() => setQuestion([shirt.white, "shirt", "white"])}>White</button>
        </div>
    )
}