import React from "react"
import { LayoutContext } from "./Layout"
import { coin } from "../images64"


export default function CantAffordDisplay() {

    const { toAsk, fade } = React.useContext(LayoutContext)

    return(
        <div className={`cant-afford-display ${fade ? "fade" : !toAsk ?  "" : "offscreen"}`}>
            <div className={`cant-afford-text-container`}>
                <div className={`cant-afford`}>Not Enough Coins</div>
            </div>
        </div>
    )
}