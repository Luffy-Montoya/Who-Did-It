import React from "react"
import { coin } from "../images64.js"
import { LayoutContext } from "../Components/Layout.jsx"


function cost(cost){

    const { modalVisible } = React.useContext(LayoutContext)

    return (
    <>
        <img className={`option-coin ${modalVisible ? "grayed" : ""}`} src={coin}/>
        <span className="cost">{cost}</span>
    </>    
    )
}

export { cost }