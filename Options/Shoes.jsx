import React from "react"
import { shoes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { cost } from "../Functions/cost"

export default function Shoes() {

   const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)
   
       function setQuestion(question, category, key){
           toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
       }

    return(
        <div className="options-list">
            <button onClick={() => setQuestion([shoes.black, "shoes", "black"])}>Black {cost(4)}</button>
            <button onClick={() => setQuestion([shoes.white, "shoes", "white"])}>White {cost(1)}</button>
            <button onClick={() => setQuestion([shoes.gray, "shoes", "gray"])}>Gray {cost(1)}</button>
            <button onClick={() => setQuestion([shoes.brown, "shoes", "brown"])}>Brown {cost(2)}</button>
            <button onClick={() => setQuestion([shoes.blue, "shoes", "blue"])}>Blue {cost(1)}</button>
            <button onClick={() => setQuestion([shoes.red, "shoes", "red"])}>Red {cost(1)}</button>
            <button onClick={() => setQuestion([shoes.purple, "shoes", "purple"])}>Purple {cost(1)}</button>
        </div>
    )
}