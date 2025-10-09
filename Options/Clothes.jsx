import React from "react"
import { clothes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function Clothes() {

    const scrollContainer = document.querySelector('.options-scroll');
    const leftArrow = document.querySelector('.scroll-arrow.left');
    const rightArrow = document.querySelector('.scroll-arrow.right');

    if (scrollContainer && leftArrow && rightArrow) {
        leftArrow.onclick = () => scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
        rightArrow.onclick = () => scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    }

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)
    
    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-display">
            <button className="scroll-arrow left">‹</button>

            <div className="options-scroll">
                <div className="options-list">
                    <button onClick={() => setQuestion([clothes.jacket, "clothes", "jacket"])}>Jacket</button>
                    <button onClick={() => setQuestion([clothes.suit, "clothes", "suit"])}>Suit</button>
                    <button onClick={() => setQuestion([clothes.tie, "clothes", "tie"])}>Tie</button>
                    <button onClick={() => setQuestion([clothes.apron, "clothes", "apron"])}>Apron</button>
                    <button onClick={() => setQuestion([clothes.skirt, "clothes", "skirt"])}>Skirt</button>
                    <button onClick={() => setQuestion([clothes.pants, "clothes", "pants"])}>Pants</button>
                </div>
            </div>

            <button className="scroll-arrow right">›</button>
        </div>
    )
}