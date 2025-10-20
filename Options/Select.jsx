import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function Select() {



    const { youWin, culprit, cannotAfford, charactersLeft, heroModeOn } = React.useContext(LayoutContext)

    return(
        <div className="options-bar">
            <button className="scroll-arrow left">‹</button>
            <div className="options-display">
                <div className="options-scroll">
                    <div className="options-list select-category">
                        {
                        youWin ? 
                        `It was ${culprit.name}! You Win!` : heroModeOn ?
                        "Hero Mode" : cannotAfford && charactersLeft.length > 0 ?
                        "Game Over." : charactersLeft.length < 24 && charactersLeft.length > 1 ?
                        `Suspects remaining: ${charactersLeft.length}` : "Select a Category"
                        }                               
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right">›</button>
        </div>
    )
}