import React from "react"

function cost(cost){
        return (
        <>
            <img className="coin" src="../images/coin.png"/>
            <span className="cost">{cost}</span>
        </>    
        )
    }

export { cost }