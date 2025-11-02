import React from "react"
import { LayoutContext } from "./Layout"

export default function Header({ children }) {

    const { culprit, modalVisible, gameStarted, coinsWon, yesCount, noCount } = React.useContext(LayoutContext)

    return(
        <div className={`header ${modalVisible || !gameStarted ? "grayed" : ""}`}>
            {/* <h1>{`${culprit.name} ${coinsWon}`}</h1> */}
            {/* <h1>{`Yes:${yesCount} No:${noCount}`}</h1> */}
            <h1>Who Diddit?</h1>
            {children} 
        </div>
    )
}