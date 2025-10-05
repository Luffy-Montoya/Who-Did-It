import React from "react"
import { shoes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { cost } from "../Functions/cost"

export default function Shoes() {

    const { setAskQuestion, } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(shoes.black)}>Black {cost(4)}</button>
            <button onClick={() => setAskQuestion(shoes.white)}>White {cost(1)}</button>
            <button onClick={() => setAskQuestion(shoes.gray)}>Gray {cost(1)}</button>
            <button onClick={() => setAskQuestion(shoes.brown)}>Brown {cost(2)}</button>
            <button onClick={() => setAskQuestion(shoes.blue)}>Blue {cost(1)}</button>
            <button onClick={() => setAskQuestion(shoes.red)}>Red {cost(1)}</button>
            <button onClick={() => setAskQuestion(shoes.purple)}>Purple {cost(1)}</button>
        </div>
    )
}