import React from "react"
import { hair } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function Hair() {

    const { setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(hair.black)}>Black</button>
            <button onClick={() => setAskQuestion(hair.brown)}>Brown</button>
            <button onClick={() => setAskQuestion(hair.blonde)}>Blonde</button>
            <button onClick={() => setAskQuestion(hair.orange)}>Orange</button>
            <button onClick={() => setAskQuestion(hair.gray)}>Gray</button>
        </div>
    )
}