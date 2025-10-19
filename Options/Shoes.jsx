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
                            onClick={() => setQuestion([shoes.black, "shoes", "black", calcPrice(askMinResults.shoes.black, level)])}
                            disabled={allOrNoneHave("shoes", "black", charactersLeft)}
                        >
                            <div>Black</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.black, level))}</div>
                        </button>
                        <button 
                            className={askOption === "blue" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.blue, "shoes", "blue", calcPrice(askMinResults.shoes.blue, level)])}
                            disabled={allOrNoneHave("shoes", "blue", charactersLeft)}
                        >
                            <div>Blue</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.blue, level))}</div>
                        </button>
                        <button 
                            className={askOption === "brown" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.brown, "shoes", "brown", calcPrice(askMinResults.shoes.brown, level)])}
                            disabled={allOrNoneHave("shoes", "brown", charactersLeft)}
                        >
                            <div>Brown</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.brown, level))}</div>
                        </button>
                        <button 
                            className={askOption === "gray" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.gray, "shoes", "gray", calcPrice(askMinResults.shoes.gray, level)])}
                            disabled={allOrNoneHave("shoes", "gray", charactersLeft)}
                        >
                            <div>Gray</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.gray, level))}</div>
                        </button>
                        <button 
                            className={askOption === "purple" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.purple, "shoes", "purple", calcPrice(askMinResults.shoes.purple, level)])}
                            disabled={allOrNoneHave("shoes", "purple", charactersLeft)}
                        >
                            <div>Purple</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.purple, level))}</div>
                        </button>
                        <button 
                            className={askOption === "red" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.red, "shoes", "red", calcPrice(askMinResults.shoes.red, level)])}
                            disabled={allOrNoneHave("shoes", "red", charactersLeft)}
                        >
                            <div>Red</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.red, level))}</div>
                        </button>
                        <button 
                            className={askOption === "white" ? "category-selected" : ""}
                            onClick={() => setQuestion([shoes.white, "shoes", "white", calcPrice(askMinResults.shoes.white, level)])}
                            disabled={allOrNoneHave("shoes", "white", charactersLeft)}
                        >
                            <div>White</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.white, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}