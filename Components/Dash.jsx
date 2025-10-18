import React from "react"
import { coin } from "../images64.js"
import { LayoutContext } from "./Layout.jsx"

export default function Dash() {

    const { wallet, modalVisible, gameStarted, level } = React.useContext(LayoutContext)

    return(
        <div className="wallet">Level: {level}<img className={`dash-coin ${modalVisible || !gameStarted ? "grayed" : ""}`} src={coin} />{wallet}</div>
    )
}