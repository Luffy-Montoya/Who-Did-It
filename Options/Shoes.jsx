import React from "react"
import { shoes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function Shoes() {

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
                    <button onClick={() => setQuestion([shoes.black, "shoes", "black"])}>Black</button>
                    <button onClick={() => setQuestion([shoes.white, "shoes", "white"])}>White</button>
                    <button onClick={() => setQuestion([shoes.gray, "shoes", "gray"])}>Gray</button>
                    <button onClick={() => setQuestion([shoes.brown, "shoes", "brown"])}>Brown</button>
                    <button onClick={() => setQuestion([shoes.blue, "shoes", "blue"])}>Blue</button>
                    <button onClick={() => setQuestion([shoes.red, "shoes", "red"])}>Red</button>
                    <button onClick={() => setQuestion([shoes.purple, "shoes", "purple"])}>Purple</button>
                </div>
            </div>

            <button className="scroll-arrow right">›</button>
        </div>
    )
}