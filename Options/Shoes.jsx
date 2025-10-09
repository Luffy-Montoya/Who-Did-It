import React from "react"
import { shoes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { optionsFunctions } from "../Functions/optionsFunctions"
import { cost } from "../Functions/cost"

export default function Shoes() {

    const { set1, leftVisible, rightVisible } = React.useContext(LayoutContext)
       
    const { setQuestion, leftArrow, rightArrow } = optionsFunctions()

    return(
        <div className="options-list">
            <div className={`button-container ${leftVisible ? "visible" : "invisible"}`}>
                <button className="scroll-left" onClick={() => leftArrow()}>{"<"}</button>
            </div>

            <div className={`options-slider ${!set1 ? "move-left" : ""}`}>
                <div className="options option-set1">
                    <button onClick={() => setQuestion([shoes.black, "shoes", "black"])}>Black</button>
                    <button onClick={() => setQuestion([shoes.white, "shoes", "white"])}>White</button>
                    <button onClick={() => setQuestion([shoes.gray, "shoes", "gray"])}>Gray</button>
                    <button onClick={() => setQuestion([shoes.brown, "shoes", "brown"])}>Brown</button>
                </div>
            
                <div className="options option-set2">
                    <button onClick={() => setQuestion([shoes.blue, "shoes", "blue"])}>Blue</button>
                    <button onClick={() => setQuestion([shoes.red, "shoes", "red"])}>Red</button>
                    <button onClick={() => setQuestion([shoes.purple, "shoes", "purple"])}>Purple</button>
                </div>
            </div>

            <div className={`button-container ${rightVisible ? "visible" : "invisible"}`}>
                <button className="scroll-right" onClick={() => rightArrow()}>{">"}</button>
            </div>
        </div>
    )
}