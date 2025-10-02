import React from "react"
import { clothes } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function Clothes() {

    const { setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(clothes.jacket)}>Jacket</button>
            <button onClick={() => setAskQuestion(clothes.suit)}>Suit</button>
            <button onClick={() => setAskQuestion(clothes.tie)}>Tie</button>
            <button onClick={() => setAskQuestion(clothes.apron)}>Apron</button>
            <button onClick={() => setAskQuestion(clothes.skirt)}>Skirt</button>
            <button onClick={() => setAskQuestion(clothes.pants)}>Pants</button>
        </div>
    )
}