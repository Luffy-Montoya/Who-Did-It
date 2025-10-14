import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function Select() {



    const { youWin } = React.useContext(LayoutContext)

    return(
        <div className="options-bar">
            <button className="scroll-arrow left">‹</button>
            <div className="options-display">
                <div className="options-scroll">
                    <div className="options-list select-category">
                        {youWin ? "You Win!" : "Select a Category"}                               
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right">›</button>
        </div>
    )
}