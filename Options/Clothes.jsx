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
        setAskOption, askOption, charactersLeft, asked, setToAsk, setToCategories, setFade } = React.useContext(LayoutContext)
    
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
                            onClick={() => setQuestion([clothes.apron, "clothes", "apron", calcPrice(askMinResults.clothes.apron)])}
                            disabled={
                                allOrNoneHave("clothes", "apron", charactersLeft) || 
                                asked.some(pair => pair[0] === "clothes" && pair[1] === "apron")
                            }
                        >
                            <div>Apron</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.apron))}</div>
                        </button>
                        <button 
                            className={askOption === "jacket" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.jacket, "clothes", "jacket", calcPrice(askMinResults.clothes.jacket)])}
                            disabled={
                                allOrNoneHave("clothes", "jacket", charactersLeft) || 
                                asked.some(pair => pair[0] === "clothes" && pair[1] === "jacket")
                            }
                        >
                            <div>Jacket</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.jacket))}</div>
                        </button>
                        <button 
                            className={askOption === "pants" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.pants, "clothes", "pants", calcPrice(askMinResults.clothes.pants)])}
                            disabled={
                                allOrNoneHave("clothes", "pants", charactersLeft) || 
                                asked.some(pair => pair[0] === "clothes" && pair[1] === "pants")
                            }
                        >
                            <div>Pants</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.pants))}</div>
                        </button> 
                        <button 
                            className={askOption === "skirt" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.skirt, "clothes", "skirt", calcPrice(askMinResults.clothes.skirt)])}
                            disabled={
                                allOrNoneHave("clothes", "skirt", charactersLeft) || 
                                asked.some(pair => pair[0] === "clothes" && pair[1] === "skirt")
                            }
                        >
                            <div>Skirt</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.skirt))}</div>
                        </button>
                        <button 
                            className={askOption === "suit" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.suit, "clothes", "suit", calcPrice(askMinResults.clothes.suit)])}
                            disabled={
                                allOrNoneHave("clothes", "suit", charactersLeft) || 
                                asked.some(pair => pair[0] === "clothes" && pair[1] === "suit")
                            }
                        >
                            <div>Suit</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.suit))}</div>
                        </button>
                        <button 
                            className={askOption === "tie" ? "category-selected" : ""}
                            onClick={() => setQuestion([clothes.tie, "clothes", "tie", calcPrice(askMinResults.clothes.tie)])}
                            disabled={
                                allOrNoneHave("clothes", "tie", charactersLeft) || 
                                asked.some(pair => pair[0] === "clothes" && pair[1] === "tie")
                            }
                        >
                            <div>Tie</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.tie))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}