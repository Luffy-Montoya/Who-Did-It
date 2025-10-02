import React from "react"
import { head } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function Head() {

    const { setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(head.any)}>Any</button>
            <button onClick={() => setAskQuestion(head.glasses)}>Glasses</button>
            <button onClick={() => setAskQuestion(head.hat)}>Hat</button>
            <button onClick={() => setAskQuestion(head.bowBand)}>Bow/Headband</button>
        </div>
    )
}