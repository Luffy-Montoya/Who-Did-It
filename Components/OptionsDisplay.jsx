import React from "react"
import { LayoutContext } from "./Layout"

export default function OptionsDisplay({ children }) {

    const { modalVisible, gameStarted } = React.useContext(LayoutContext)

    return(
        <>
            <div className={`options-display ${modalVisible || !gameStarted ? "grayed" : ""}`}>
                {children}
            </div>
            <div className="options-ghost"></div>
        </>
    )
}