import React from "react"
import { coin } from "../images64.js"
import { LayoutContext } from "./Layout.jsx"

export default function Dash() {

    const { wallet, modalVisible } = React.useContext(LayoutContext)

    return(
        <div className="wallet"><img className={`dash-coin ${modalVisible ? "grayed" : ""}`} src={coin} />{wallet}</div>
    )
}