import React from "react"
import { genderSkin } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function GenderSkin() {

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
                    <button onClick={() => setQuestion([genderSkin.man, "gender", "male"])}>Man</button>
                    <button onClick={() => setQuestion([genderSkin.woman, "gender", "female"])}>Woman</button>
                    <button onClick={() => setQuestion([genderSkin.light, "skin", "light"])}>Light Skin</button>
                    <button onClick={() => setQuestion([genderSkin.dark, "skin", "dark"])}>Dark Skin</button>
                </div>
            </div>

            <button className="scroll-arrow right">›</button>
        </div>
    )
}