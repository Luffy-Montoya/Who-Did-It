import React from "react"
import { hair } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"
import { allOrNoneHave } from "../Functions/allOrNoneHave"

export default function Hair() {

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
                            className={askOption === "black" ? "category-selected" : ""}
                            onClick={() => setQuestion([hair.black, "hair", "black", calcPrice(askMinResults.hair.black)])}
                            disabled={
                                allOrNoneHave("hair", "black", charactersLeft) || 
                                asked.some(pair => pair[0] === "hair" && pair[1] === "black")
                            }
                        >
                            <div>Black</div>
                            <div className="price">{cost(calcPrice(askMinResults.hair.black))}</div>
                        </button>
                        <button 
                            className={askOption === "blonde" ? "category-selected" : ""}
                            onClick={() => setQuestion([hair.blonde, "hair", "blonde", calcPrice(askMinResults.hair.blonde)])}
                            disabled={
                                allOrNoneHave("hair", "blonde", charactersLeft) || 
                                asked.some(pair => pair[0] === "hair" && pair[1] === "blonde")
                            }
                        >
                            <div>Blonde</div>
                            <div className="price">{cost(calcPrice(askMinResults.hair.blonde))}</div>
                        </button>
                        <button 
                            className={askOption === "brown" ? "category-selected" : ""}
                            onClick={() => setQuestion([hair.brown, "hair", "brown", calcPrice(askMinResults.hair.brown)])}
                            disabled={
                                allOrNoneHave("hair", "brown", charactersLeft) || 
                                asked.some(pair => pair[0] === "hair" && pair[1] === "brown")
                            }
                        >
                            <div>Brown</div>
                            <div className="price">{cost(calcPrice(askMinResults.hair.brown))}</div>
                        </button>
                        <button 
                            className={askOption === "gray" ? "category-selected" : ""}
                            onClick={() => setQuestion([hair.gray, "hair", "gray", calcPrice(askMinResults.hair.gray)])}
                            disabled={
                                allOrNoneHave("hair", "gray", charactersLeft) || 
                                asked.some(pair => pair[0] === "hair" && pair[1] === "gray")
                            }
                        >
                            <div>Gray</div>
                            <div className="price">{cost(calcPrice(askMinResults.hair.gray))}</div>
                        </button>
                        <button 
                            className={askOption === "orange" ? "category-selected" : ""}
                            onClick={() => setQuestion([hair.orange, "hair", "orange", calcPrice(askMinResults.hair.orange)])}
                            disabled={
                                allOrNoneHave("hair", "orange", charactersLeft) || 
                                asked.some(pair => pair[0] === "hair" && pair[1] === "orange")
                            }
                        >
                            <div>Orange</div>
                            <div className="price">{cost(calcPrice(askMinResults.hair.orange))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}