import React from "react"
import { clothes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"
import { allOrNoneHave } from "../Functions/allOrNoneHave"

export default function Clothes() {

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
                            className={askOption === "apron" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.apron, "clothes", "apron", calcPrice(askMinResults.clothes.apron, level)])}
                            disabled={allOrNoneHave("clothes", "apron", charactersLeft)}
                        >
                            <div>Apron</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.apron, level))}</div>
                        </button>
                        <button 
                            className={askOption === "jacket" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.jacket, "clothes", "jacket", calcPrice(askMinResults.clothes.jacket, level)])}
                            disabled={allOrNoneHave("clothes", "jacket", charactersLeft)}
                        >
                            <div>Jacket</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.jacket, level))}</div>
                        </button>
                        <button 
                            className={askOption === "pants" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.pants, "clothes", "pants", calcPrice(askMinResults.clothes.pants, level)])}
                            disabled={allOrNoneHave("clothes", "pants", charactersLeft)}
                        >
                            <div>Pants</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.pants, level))}</div>
                        </button> 
                        <button 
                            className={askOption === "skirt" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.skirt, "clothes", "skirt", calcPrice(askMinResults.clothes.skirt, level)])}
                            disabled={allOrNoneHave("clothes", "skirt", charactersLeft)}
                        >
                            <div>Skirt</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.skirt, level))}</div>
                        </button>
                        <button 
                            className={askOption === "suit" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.suit, "clothes", "suit", calcPrice(askMinResults.clothes.suit, level)])}
                            disabled={allOrNoneHave("clothes", "suit", charactersLeft)}
                        >
                            <div>Suit</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.suit, level))}</div>
                        </button>
                        <button 
                            className={askOption === "tie" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.tie, "clothes", "tie", calcPrice(askMinResults.clothes.tie, level)])}
                            disabled={allOrNoneHave("clothes", "tie", charactersLeft)}
                        >
                            <div>Tie</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.tie, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}