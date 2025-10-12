import React from "react"
import { shirt } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Shirt() {

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
                        <button onClick={() => setQuestion([shirt.red, "shirt", "red"])}>Red</button>
                        <button onClick={() => setQuestion([shirt.blue, "shirt", "blue"])}>Blue</button>
                        <button onClick={() => setQuestion([shirt.green, "shirt", "green"])}>Green</button>
                        <button onClick={() => setQuestion([shirt.purple, "shirt", "purple"])}>Purple</button>
                        <button onClick={() => setQuestion([shirt.pink, "shirt", "pink"])}>Pink</button>
                        <button onClick={() => setQuestion([shirt.white, "shirt", "white"])}>White</button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}