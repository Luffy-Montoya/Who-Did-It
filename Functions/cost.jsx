import React from "react"
import coinImg from "../src/images/coin.png"

function cost(cost){
        return (
        <>
            <img className="coin" src={coinImg}/>
            <span className="cost">{cost}</span>
        </>    
        )
    }

export { cost }