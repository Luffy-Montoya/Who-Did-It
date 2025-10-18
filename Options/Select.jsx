import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function Select() {



    const { youWin, culprit, cannotAfford, charactersLeft } = React.useContext(LayoutContext)

    return(
        <div className="options-bar">
            <button className="scroll-arrow left">‹</button>
            <div className="options-display">
                <div className="options-scroll">
                    <div className="options-list select-category">
                        {
                        youWin ? 
                        `It was ${culprit.name}! You Win!` : cannotAfford && charactersLeft.length > 1 ?
                        "Game Over.  Not enough coins." : charactersLeft.length < 24 ?
                        `Suspects remaining: ${charactersLeft.length}` : "Select a Category"
                        }                               
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right">›</button>
        </div>
    )
}