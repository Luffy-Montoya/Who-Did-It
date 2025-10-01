import React from "react"
import { LayoutContext } from "./Layout"

export default function AskDisplay() {

    const { askQuestion } = React.useContext(LayoutContext)

    return(
        <>
        <h1>{askQuestion}</h1>
        <button onClick={() => console.log(askQuestion)}>Question</button>
        </>
    )
}