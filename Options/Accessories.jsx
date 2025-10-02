import React from "react"

import { acc } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function Accessories() {

    const { setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(acc.any)}>Any</button>
            <button onClick={() => setAskQuestion(acc.whistle)}>Whistle</button>
            <button onClick={() => setAskQuestion(acc.books)}>Books</button>
            <button onClick={() => setAskQuestion(acc.clipboard)}>ClipBoard</button>
            <button onClick={() => setAskQuestion(acc.purse)}>Purse</button>
            <button onClick={() => setAskQuestion(acc.badge)}>Badge</button>
            <button onClick={() => setAskQuestion(acc.math)}>Math Stuff</button>
            <button onClick={() => setAskQuestion(acc.broom)}>Broom</button>
            <button onClick={() => setAskQuestion(acc.animals)}>Animals</button>
            <button onClick={() => setAskQuestion(acc.mask)}>Mask</button>
            <button onClick={() => setAskQuestion(acc.basketball)}>Basketball</button>
            <button onClick={() => setAskQuestion(acc.computer)}>Computer</button>
            <button onClick={() => setAskQuestion(acc.microphone)}>Microphone</button>
            <button onClick={() => setAskQuestion(acc.pad)}>Writing Pad</button>
            <button onClick={() => setAskQuestion(acc.science)}>Science Stuff</button>
        </div>
    )
}