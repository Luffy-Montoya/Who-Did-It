import React from "react"
import { pants } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"
import { allOrNoneHave } from "../Functions/allOrNoneHave"

export default function Pants() {

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
        console.log(asked.includes(["accessories", "none"]))
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
                            onClick={() => setQuestion([pants.none, "pants", "none", calcPrice(askMinResults.pants.none, level)])}
                            disabled={allOrNoneHave("pants", "none", charactersLeft)}
                        >
                            <div>None</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.none, level))}</div>
                        </button>
                        <button 
                            className={askOption === "black" ? "category-selected" : ""}
                            onClick={() => setQuestion([pants.black, "pants", "black", calcPrice(askMinResults.pants.black, level)])}
                            disabled={allOrNoneHave("pants", "black", charactersLeft)}
                        >
                            <div>Black</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.black, level))}</div>
                        </button>
                        <button 
                            className={askOption === "blue" ? "category-selected" : ""}
                            onClick={() => setQuestion([pants.blue, "pants", "blue", calcPrice(askMinResults.pants.blue, level)])}
                            disabled={allOrNoneHave("pants", "blue", charactersLeft)}
                        >
                            <div>Blue</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.blue, level))}</div>
                        </button>
                        <button 
                            className={askOption === "brown" ? "category-selected" : ""}
                            onClick={() => setQuestion([pants.brown, "pants", "brown", calcPrice(askMinResults.pants.brown, level)])}
                            disabled={allOrNoneHave("pants", "brown", charactersLeft)}
                        >
                            <div>Brown</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.brown, level))}</div>
                        </button>
                        <button 
                            className={askOption === "gray" ? "category-selected" : ""}
                            onClick={() => setQuestion([pants.gray, "pants", "gray", calcPrice(askMinResults.pants.gray, level)])}
                            disabled={allOrNoneHave("pants", "gray", charactersLeft)}
                        >
                            <div>Gray</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.gray, level))}</div>
                        </button>
                        <button 
                            className={askOption === "green" ? "category-selected" : ""}
                            onClick={() => setQuestion([pants.green, "pants", "green", calcPrice(askMinResults.pants.green, level)])}
                            disabled={allOrNoneHave("pants", "green", charactersLeft)}
                        >
                            <div>Green</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.green, level))}</div>
                        </button>
                        <button 
                            className={askOption === "magenta" ? "category-selected" : ""}
                            onClick={() => setQuestion([pants.magenta, "pants", "magenta", calcPrice(askMinResults.pants.magenta, level)])}
                            disabled={allOrNoneHave("pants", "magenta", charactersLeft)}
                        >
                            <div>Magenta</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.magenta, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}