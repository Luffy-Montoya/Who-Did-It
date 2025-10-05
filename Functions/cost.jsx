import React from "react"
import { LayoutContext } from "../Components/Layout"

function cost(cost){

const { coin } = React.useContext(LayoutContext)

    return (
    <>
        {coin}
        <span className="cost">{cost}</span>
    </>    
    )
}

export { cost }