import React from "react"
import { coin } from "../images64.js"


function cost(cost){

    return (
    <>
        <img className="coin" src={coin}/>
        <span className="cost">{cost}</span>
    </>    
    )
}

export { cost }