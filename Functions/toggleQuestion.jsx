import React from "react"
    
export function toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, questionArray, price) {
    setAskQuestion(questionArray)
    setAskDisplay(true)
    setCategoryDisplay(false)
    setPrice(price)
}