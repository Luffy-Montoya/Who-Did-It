import React from "react"
import coinImg from "../src/images/coin.png"

export default function Dash() {

    const coin = <img className="coin" src={coinImg}/>

    return(
        <h3>{coin}15</h3>
    )
}