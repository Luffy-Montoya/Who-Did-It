import React from "react"
import { LayoutContext } from "./Layout"

export default function Header({ children }) {

    const { culprit, modalVisible, gameStarted } = React.useContext(LayoutContext)

    return(
        <div className={`header ${modalVisible || !gameStarted ? "grayed" : ""}`}>
            <h1>{culprit.name}</h1>
            {children}
        </div>
    )
}