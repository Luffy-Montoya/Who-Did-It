import React from "react"
import { shoes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"
import { allOrNoneHave } from "../Functions/allOrNoneHave"

export default function Shoes() {

    const scrollRef = React.useRef();
    
    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, askOption, charactersLeft, asked } = React.useContext(LayoutContext)
        
    function setQuestion(question, option, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, question, option, key)
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
                            onClick={() => setQuestion([shoes.black, "shoes", "black", calcPrice(askMinResults.shoes.black)])}
                            disabled={
                                allOrNoneHave("shoes", "black", charactersLeft) || 
                                asked.some(pair => pair[0] === "shoes" && pair[1] === "black")
                            }
                        >
                            <div>Black</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.black))}</div>
                        </button>
                        <button 
                            className={askOption === "blue" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.blue, "shoes", "blue", calcPrice(askMinResults.shoes.blue)])}
                            disabled={
                                allOrNoneHave("shoes", "blue", charactersLeft) || 
                                asked.some(pair => pair[0] === "shoes" && pair[1] === "blue")
                            }
                        >
                            <div>Blue</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.blue))}</div>
                        </button>
                        <button 
                            className={askOption === "brown" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.brown, "shoes", "brown", calcPrice(askMinResults.shoes.brown)])}
                            disabled={
                                allOrNoneHave("shoes", "brown", charactersLeft) || 
                                asked.some(pair => pair[0] === "shoes" && pair[1] === "brown")
                            }
                        >
                            <div>Brown</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.brown))}</div>
                        </button>
                        <button 
                            className={askOption === "gray" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.gray, "shoes", "gray", calcPrice(askMinResults.shoes.gray)])}
                            disabled={
                                allOrNoneHave("shoes", "gray", charactersLeft) || 
                                asked.some(pair => pair[0] === "shoes" && pair[1] === "gray")
                            }
                        >
                            <div>Gray</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.gray))}</div>
                        </button>
                        <button 
                            className={askOption === "purple" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.purple, "shoes", "purple", calcPrice(askMinResults.shoes.purple)])}
                            disabled={
                                allOrNoneHave("shoes", "purple", charactersLeft) || 
                                asked.some(pair => pair[0] === "shoes" && pair[1] === "purple")
                            }
                        >
                            <div>Purple</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.purple))}</div>
                        </button>
                        <button 
                            className={askOption === "red" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.red, "shoes", "red", calcPrice(askMinResults.shoes.red)])}
                            disabled={
                                allOrNoneHave("shoes", "red", charactersLeft) || 
                                asked.some(pair => pair[0] === "shoes" && pair[1] === "red")
                            }
                        >
                            <div>Red</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.red))}</div>
                        </button>
                        <button 
                            className={askOption === "white" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.white, "shoes", "white", calcPrice(askMinResults.shoes.white)])}
                            disabled={
                                allOrNoneHave("shoes", "white", charactersLeft) || 
                                asked.some(pair => pair[0] === "shoes" && pair[1] === "white")
                            }
                        >
                            <div>White</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.white))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}