import React from "react"
import { genderSkin } from "../questions"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { LayoutContext } from "../Components/Layout"

export default function GenderSkin() {

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)

    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-list">
            <button onClick={() => setQuestion([genderSkin.man, "gender", "male"])}>Man</button>
            <button onClick={() => setQuestion([genderSkin.woman, "gender", "female"])}>Woman</button>
            <button onClick={() => setQuestion([genderSkin.light, "skin", "light"])}>Light Skin</button>
            <button onClick={() => setQuestion([genderSkin.dark, "skin", "dark"])}>Dark Skin</button>
        </div>
    )
}