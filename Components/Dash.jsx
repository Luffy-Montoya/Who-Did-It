import React from "react"
import { coin } from "../images64.js"
import { LayoutContext } from "./Layout.jsx"

export default function Dash() {

    const { wallet } = React.useContext(LayoutContext)

    return(
        <div className="wallet"><img className="coin-dash" src={coin} />{wallet}</div>
    )
}