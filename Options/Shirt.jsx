import React from "react"
import { shirt } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { optionsFunctions } from "../Functions/optionsFunctions"

export default function Shirt() {

    const { set1, leftVisible, rightVisible } = React.useContext(LayoutContext)
    
    const { setQuestion, leftArrow, rightArrow } = optionsFunctions()

    return(
        <div className="options-list">
            <div className={`button-container ${leftVisible ? "visible" : "invisible"}`}>
                <button className="scroll-left" onClick={() => leftArrow()}>{"<"}</button>
            </div>

            <div className={`options-slider ${!set1 ? "move-left" : ""}`}>
                <div className="options option-set1">
                    <button onClick={() => setQuestion([shirt.red, "shirt", "red"])}>Red</button>
                    <button onClick={() => setQuestion([shirt.blue, "shirt", "blue"])}>Blue</button>
                    <button onClick={() => setQuestion([shirt.green, "shirt", "green"])}>Green</button>
                </div>
            
                <div className="options option-set2">
                    <button onClick={() => setQuestion([shirt.purple, "shirt", "purple"])}>Purple</button>
                    <button onClick={() => setQuestion([shirt.pink, "shirt", "pink"])}>Pink</button>
                    <button onClick={() => setQuestion([shirt.white, "shirt", "white"])}>White</button>
                </div>
            </div>

            <div className={`button-container ${rightVisible ? "visible" : "invisible"}`}>
                <button className="scroll-right" onClick={() => rightArrow()}>{">"}</button>
            </div>
        </div>
    )
}