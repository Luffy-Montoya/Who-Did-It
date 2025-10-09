import React from "react"
import { pants } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function Pants() {

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
                    <button onClick={() => setQuestion([pants.any, "pants", "none"])}>Any</button>
                    <button onClick={() => setQuestion([pants.blue, "pants", "blue"])}>Blue</button>
                    <button onClick={() => setQuestion([pants.gray, "pants", "gray"])}>Gray</button>
                    <button onClick={() => setQuestion([pants.black, "pants", "black"])}>Black</button>
                    <button onClick={() => setQuestion([pants.brown, "pants", "brown"])}>Brown</button>
                    <button onClick={() => setQuestion([pants.green, "pants", "green"])}>Green</button>
                    <button onClick={() => setQuestion([pants.magenta, "pants", "magenta"])}>Magenta</button>
                </div>
            </div>

            <button className="scroll-arrow right">›</button>
        </div>
    )
}