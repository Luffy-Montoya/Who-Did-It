import React from "react"
import { clothes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { optionsFunctions } from "../Functions/optionsFunctions"

export default function Clothes() {

    const { set1, leftVisible, rightVisible } = React.useContext(LayoutContext)
           
    const { setQuestion, leftArrow, rightArrow } = optionsFunctions()

    return(
        <div className="options-list">
            <div className={`button-container ${leftVisible ? "visible" : "invisible"}`}>
                <button className="scroll-left" onClick={() => leftArrow()}>{"<"}</button>
            </div>

            <div className={`options-slider ${!set1 ? "move-left" : ""}`}>
                <div className="options option-set1">
                    <button onClick={() => setQuestion([clothes.jacket, "clothes", "jacket"])}>Jacket</button>
                    <button onClick={() => setQuestion([clothes.suit, "clothes", "suit"])}>Suit</button>
                    <button onClick={() => setQuestion([clothes.tie, "clothes", "tie"])}>Tie</button>
                </div>
            
                <div className="options option-set2">
                    <button onClick={() => setQuestion([clothes.apron, "clothes", "apron"])}>Apron</button>
                    <button onClick={() => setQuestion([clothes.skirt, "clothes", "skirt"])}>Skirt</button>
                    <button onClick={() => setQuestion([clothes.pants, "clothes", "pants"])}>Pants</button>
                </div>
            </div>

            <div className={`button-container ${rightVisible ? "visible" : "invisible"}`}>
                <button className="scroll-right" onClick={() => rightArrow()}>{">"}</button>
            </div>
        </div>
    )
}