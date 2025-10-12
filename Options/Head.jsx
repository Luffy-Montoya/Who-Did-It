import React from "react"
import { head } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"

export default function Head() {

    const scrollRef = React.useRef();
            
    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, charactersLeft } = React.useContext(LayoutContext)
    
    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-bar">
            <button className="scroll-arrow left" onClick={scrollLeft}>‹</button>
            <div className="options-display">
                <div className="options-scroll" ref={scrollRef}>
                    <div className="options-list">
                        <div className="ghost-div"></div>  
                        <button onClick={() => setQuestion([head.any, "head", "none", calcPrice(askMinResults.head.any, charactersLeft.length)])}>
                            <div>Any</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.any, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([head.bowBand, "head", "bow/headband", calcPrice(askMinResults.head.bow, charactersLeft.length)])}>
                            <div>Bow / Band</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.bow, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([head.glasses, "head", "glasses", calcPrice(askMinResults.head.glasses, charactersLeft.length)])}>
                            <div>Glasses</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.glasses, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([head.hat, "head", "hat", calcPrice(askMinResults.head.hat, charactersLeft.length)])}>
                            <div>Hat</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.hat, charactersLeft.length))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}