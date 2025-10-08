import React from "react"
import { LayoutContext } from "./Layout"
import { selectCharacter } from "../Functions/selectCharacter"

export default function AskDisplay() {

    const { askQuestion, charactersLeft, setRow1, setRow2, setRow3, setRow4, setActive } = React.useContext(LayoutContext)
    const parameters = [askQuestion[1], askQuestion[2], charactersLeft, setRow1, setRow2, setRow3, setRow4, setActive]

    return(
        <div className="ask-display">
            {askQuestion[0]}
            <button onClick={() => selectCharacter(...parameters)}>Ask</button>
        </div>
    )
}