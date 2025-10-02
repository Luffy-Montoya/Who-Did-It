import React from "react"
import { shirt } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function Shirt() {

    const { setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(shirt.red)}>Red</button>
            <button onClick={() => setAskQuestion(shirt.blue)}>Blue</button>
            <button onClick={() => setAskQuestion(shirt.green)}>Green</button>
            <button onClick={() => setAskQuestion(shirt.purple)}>Purple</button>
            <button onClick={() => setAskQuestion(shirt.pink)}>Pink</button>
            <button onClick={() => setAskQuestion(shirt.white)}>White</button>
        </div>
    )
}