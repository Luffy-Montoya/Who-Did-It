import React from "react"
import { head } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Head() {

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
                        <button onClick={() => setQuestion([head.any, "head", "none"])}><div>Any</div><div className="price">{cost(17)}</div></button>
                        <button onClick={() => setQuestion([head.glasses, "head", "glasses"])}><div>Glasses</div><div className="price">{cost(9)}</div></button>
                        <button onClick={() => setQuestion([head.hat, "head", "hat"])}><div>Hat</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([head.bowBand, "head", "bow/headband"])}><div>Bow / Band</div><div className="price">{cost(3)}</div></button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}