import React from "react"
import { clothes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Clothes() {

    const scrollRef = React.useRef();
    
    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)
    
    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-bar">
            <button className="scroll-arrow left" onClick={scrollLeft}>‹</button>
            <div className="options-display">
                <div className="options-scroll" ref={scrollRef}>
                    <div className="options-list">
                        <div class="ghost-div"></div>  
                        <button onClick={() => setQuestion([clothes.jacket, "clothes", "jacket"])}>Jacket</button>
                        <button onClick={() => setQuestion([clothes.suit, "clothes", "suit"])}>Suit</button>
                        <button onClick={() => setQuestion([clothes.tie, "clothes", "tie"])}>Tie</button>
                        <button onClick={() => setQuestion([clothes.apron, "clothes", "apron"])}>Apron</button>
                        <button onClick={() => setQuestion([clothes.skirt, "clothes", "skirt"])}>Skirt</button>
                        <button onClick={() => setQuestion([clothes.pants, "clothes", "pants"])}>Pants</button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}