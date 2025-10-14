import React from "react"
import { shirt } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"
import { allOrNoneHave } from "../Functions/allOrNoneHave"

export default function Shirt() {

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
                            className={askOption === "blue" ? "category-selected" : ""}
                            onClick={() => setQuestion([shirt.blue, "shirt", "blue", calcPrice(askMinResults.shirt.blue)])}
                            disabled={
                                allOrNoneHave("shirt", "blue", charactersLeft) || 
                                asked.some(pair => pair[0] === "shirt" && pair[1] === "blue")
                            }
                        >
                            <div>Blue</div>
                            <div className="price">{cost(calcPrice(askMinResults.shirt.blue))}</div>
                        </button>
                        <button 
                            className={askOption === "green" ? "category-selected" : ""}
                            onClick={() => setQuestion([shirt.green, "shirt", "green", calcPrice(askMinResults.shirt.green)])}
                            disabled={
                                allOrNoneHave("shirt", "green", charactersLeft) || 
                                asked.some(pair => pair[0] === "shirt" && pair[1] === "green")
                            }
                        >
                            <div>Green</div>
                            <div className="price">{cost(calcPrice(askMinResults.shirt.green))}</div>
                        </button>
                        <button 
                            className={askOption === "pink" ? "category-selected" : ""}
                            onClick={() => setQuestion([shirt.pink, "shirt", "pink", calcPrice(askMinResults.shirt.pink)])}
                            disabled={
                                allOrNoneHave("shirt", "pink", charactersLeft) || 
                                asked.some(pair => pair[0] === "shirt" && pair[1] === "pink")
                            }
                        >
                            <div>Pink</div>
                            <div className="price">{cost(calcPrice(askMinResults.shirt.pink))}</div>
                        </button>
                        <button 
                            className={askOption === "purple" ? "category-selected" : ""}
                            onClick={() => setQuestion([shirt.purple, "shirt", "purple", calcPrice(askMinResults.shirt.purple)])}
                            disabled={
                                allOrNoneHave("shirt", "purple", charactersLeft) || 
                                asked.some(pair => pair[0] === "shirt" && pair[1] === "purple")
                            }
                        >
                            <div>Purple</div>
                            <div className="price">{cost(calcPrice(askMinResults.shirt.purple))}</div>
                        </button>
                        <button 
                            className={askOption === "red" ? "category-selected" : ""}
                            onClick={() => setQuestion([shirt.red, "shirt", "red", calcPrice(askMinResults.shirt.red)])}
                            disabled={
                                allOrNoneHave("shirt", "red", charactersLeft) || 
                                asked.some(pair => pair[0] === "shirt" && pair[1] === "red")
                            }
                        >
                            <div>Red</div>
                            <div className="price">{cost(calcPrice(askMinResults.shirt.red))}</div>
                        </button>
                        <button 
                            className={askOption === "white" ? "category-selected" : ""}
                            onClick={() => setQuestion([shirt.white, "shirt", "white", calcPrice(askMinResults.shirt.white)])}
                            disabled={
                                allOrNoneHave("shirt", "white", charactersLeft) || 
                                asked.some(pair => pair[0] === "shirt" && pair[1] === "white")
                            }
                        >
                            <div>White</div>
                            <div className="price">{cost(calcPrice(askMinResults.shirt.white))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}