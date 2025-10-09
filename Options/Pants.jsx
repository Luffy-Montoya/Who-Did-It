import React from "react"
import { pants } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { optionsFunctions } from "../Functions/optionsFunctions"

export default function Pants() {

    const { set1, leftVisible, rightVisible } = React.useContext(LayoutContext)

    const { setQuestion, leftArrow, rightArrow } = optionsFunctions()

    return(
        <div className="options-list">
            <div className={`button-container ${leftVisible ? "visible" : "invisible"}`}>
                <button className="scroll-left" onClick={() => leftArrow()}>{"<"}</button>
            </div>

            <div className={`options-slider ${!set1 ? "move-left" : ""}`}>
                <div className="options option-set1">
                    <button onClick={() => setQuestion([pants.any, "pants", "none"])}>Any</button>
                    <button onClick={() => setQuestion([pants.blue, "pants", "blue"])}>Blue</button>
                    <button onClick={() => setQuestion([pants.gray, "pants", "gray"])}>Gray</button>
                    <button onClick={() => setQuestion([pants.black, "pants", "black"])}>Black</button>
                </div>

                <div className="options option-set2">
                    <button onClick={() => setQuestion([pants.brown, "pants", "brown"])}>Brown</button>
                    <button onClick={() => setQuestion([pants.green, "pants", "green"])}>Green</button>
                    <button onClick={() => setQuestion([pants.magenta, "pants", "magenta"])}>Magenta</button>
                </div>
            </div>

            <div className={`button-container ${rightVisible ? "visible" : "invisible"}`}>
                <button className="scroll-right" onClick={() => rightArrow()}>{">"}</button>
            </div>
        </div>
    )
}