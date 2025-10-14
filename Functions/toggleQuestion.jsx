import React from "react"
    
export function toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, questionArray, price) {
    setAskQuestion(questionArray)
    setTimeout(() => {
        setAskDisplay(true)
        setCategoryDisplay(false)
    }, 250)
    setPrice(price)
    setAskOption(questionArray[2])
}