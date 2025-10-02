import React from "react"
import { pants } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function Pants() {

    const { setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(pants.any)}>Any</button>
            <button onClick={() => setAskQuestion(pants.blue)}>Blue</button>
            <button onClick={() => setAskQuestion(pants.gray)}>Gray</button>
            <button onClick={() => setAskQuestion(pants.black)}>Black</button>
            <button onClick={() => setAskQuestion(pants.red)}>Red</button>
            <button onClick={() => setAskQuestion(pants.brown)}>Brown</button>
            <button onClick={() => setAskQuestion(pants.green)}>Green</button>
            <button onClick={() => setAskQuestion(pants.magenta)}>Magenta</button>
        </div>
    )
}