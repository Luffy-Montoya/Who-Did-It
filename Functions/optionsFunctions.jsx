import React from "react"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "./toggleQuestion"

export function optionsFunctions() {

    const { 
            setAskQuestion, setCategoryDisplay, setAskDisplay, 
            setPrice, setSet1, setLeftVisible, setRightVisible
        } = React.useContext(LayoutContext)

    function setQuestion(question, category, key){

        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    function leftArrow() {
        setSet1(true)
        setLeftVisible(false)
        setRightVisible(true)
    }

    function rightArrow() {
        setSet1(false)
        setLeftVisible(true)
        setRightVisible(false)
    }

    return { setQuestion, leftArrow, rightArrow}

}