import React from "react"
import { genderSkin } from "../questions"
import { LayoutContext } from "../Components/Layout"

export default function GenderSkin() {

    const { setAskQuestion } = React.useContext(LayoutContext)

    return(
        <div className="options-list">
            <button onClick={() => setAskQuestion(genderSkin.man)}>Man</button>
            <button onClick={() => setAskQuestion(genderSkin.woman)}>Woman</button>
            <button onClick={() => setAskQuestion(genderSkin.light)}>Light Skin</button>
            <button onClick={() => setAskQuestion(genderSkin.dark)}>Dark Skin</button>
        </div>
    )
}