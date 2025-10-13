import React from "react"
    
export function toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, questionArray, price) {
    setAskQuestion(questionArray)
    setAskDisplay(true)
    setCategoryDisplay(false)
    setPrice(price)
    setAskOption(questionArray[2])
}