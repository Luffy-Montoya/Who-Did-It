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
            setAskOption, askOption, charactersLeft, asked, setToAsk, setToCategories } = React.useContext(LayoutContext)
        
    function setQuestion(question, option, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, question, option, key)
        setTimeout(() => {
            setToAsk(true)
            setToCategories(false)
        }, 10)
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
                            onClick={() => setQuestion([head.any, "head", "none", calcPrice(askMinResults.head.any)])}
                            disabled={
                                allOrNoneHave("head", "none", charactersLeft) || 
                                asked.some(pair => pair[0] === "head" && pair[1] === "none")
                            }
                        >
                            <div>Nothing</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.any))}</div>
                        </button>
                        <button 
                            className={askOption === "bow/headband" ? "category-selected" : ""}
                            onClick={() => setQuestion([head.bowBand, "head", "bow/headband", calcPrice(askMinResults.head.bow)])}
                            disabled={
                                allOrNoneHave("head", "bow/headband", charactersLeft) || 
                                asked.some(pair => pair[0] === "head" && pair[1] === "bow/headband")
                            }
                        >
                            <div>Bow / Band</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.bow))}</div>
                        </button>
                        <button 
                            className={askOption === "glasses" ? "category-selected" : ""}
                            onClick={() => setQuestion([head.glasses, "head", "glasses", calcPrice(askMinResults.head.glasses)])}
                            disabled={
                                allOrNoneHave("head", "glasses", charactersLeft) || 
                                asked.some(pair => pair[0] === "head" && pair[1] === "glasses")
                            }
                        >
                            <div>Glasses</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.glasses))}</div>
                        </button>
                        <button 
                            className={askOption === "hat" ? "category-selected" : ""}
                            onClick={() => setQuestion([head.hat, "head", "hat", calcPrice(askMinResults.head.hat)])}
                            disabled={
                                allOrNoneHave("head", "hat", charactersLeft) || 
                                asked.some(pair => pair[0] === "head" && pair[1] === "hat")
                            }
                        >
                            <div>Hat</div>
                            <div className="price">{cost(calcPrice(askMinResults.head.hat))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}