import React from "react"
import { shoes } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function Shoes() {

    const { setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(shoes.black)}>Black</button>
            <button onClick={() => setAskQuestion(shoes.white)}>White</button>
            <button onClick={() => setAskQuestion(shoes.gray)}>Gray</button>
            <button onClick={() => setAskQuestion(shoes.brown)}>Brown</button>
            <button onClick={() => setAskQuestion(shoes.blue)}>Blue</button>
            <button onClick={() => setAskQuestion(shoes.red)}>Red</button>
            <button onClick={() => setAskQuestion(shoes.purple)}>Purple</button>
        </div>
    )
}