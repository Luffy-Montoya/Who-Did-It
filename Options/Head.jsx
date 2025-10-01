import React from "react"
import { head } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function Head() {

    const { askQuestion, setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(head.any)}>Any</button>
            <button>Glasses</button>
            <button>Hat</button>
            <button>Bow/Band</button>
        </div>
    )
}