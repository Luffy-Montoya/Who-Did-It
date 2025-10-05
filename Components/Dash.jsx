import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function Dash() {

    const { coin } = React.useContext(LayoutContext)

    return(
        <h3>{coin}15</h3>
    )
}