import React from "react"
import { head } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"
import { allOrNoneHave } from "../Functions/allOrNoneHave"

export default function Head() {

    const scrollRef = React.useRef();
            
    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { 
        setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, 
        setAskOption, askOption, charactersLeft, setToAsk, setToCategories, setFade, level } = React.useContext(LayoutContext)
    
    function setQuestion(question, option, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, question, option, key)
        setFade(false)
        setToCategories(false)
        setTimeout(() => {
            setToAsk(true)
        }, 300)
        console.log("included")
    }

    return(
        <div className="options-bar">
            <button className="scroll-arrow left" onClick={scrollLeft}>‹</button>
            <div className="options-display">
                <div className="options-scroll" ref={scrollRef}>
                    <div className="options-list">
                        <div className="ghost-div"></div>  
                        <button 
                            className={askOption === "none" ? "category-selected" : ""}
                            onClick={() => setQuestion([head.none, "head", "none", calcPrice(askMinResults.head.none, level)])}
                            disabled={allOrNoneHave("head", "none", charactersLeft)}
                        >
                            <div>Nothing</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.none, level))}</div>
                        </button>
                        <button 
                            className={askOption === "bow" ? "category-selected" : ""}
                            onClick={() => setQuestion([head.bowBand, "head", "bow", calcPrice(askMinResults.head.bow, level)])}
                            disabled={allOrNoneHave("head", "bow", charactersLeft)}
                        >
                            <div>Bow / Band</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.bow, level))}</div>
                        </button>
                        <button 
                            className={askOption === "glasses" ? "category-selected" : ""}
                            onClick={() => setQuestion([head.glasses, "head", "glasses", calcPrice(askMinResults.head.glasses, level)])}
                            disabled={allOrNoneHave("head", "glasses", charactersLeft)}
                        >
                            <div>Glasses</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.glasses, level))}</div>
                        </button>
                        <button 
                            className={askOption === "hat" ? "category-selected" : ""}
                            onClick={() => setQuestion([head.hat, "head", "hat", calcPrice(askMinResults.head.hat, level)])}
                            disabled={allOrNoneHave("head", "hat", charactersLeft)}
                        >
                            <div>Hat</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.hat, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}