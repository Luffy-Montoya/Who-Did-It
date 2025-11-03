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
            setAskOption, askOption, charactersLeft, setToAsk, setToCategories,
            setFade, level, wallet, setCantAffordDisplay, setOptionsBar, askDisplay,
            heroModeOn, charityEnabled } = React.useContext(LayoutContext)
        
        function setQuestion(question, option, key){
                if (wallet >= question[3]){
                    toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, question, option, key)
                    setFade(false)
                    setToCategories(false)
                    setTimeout(() => {
                        setToAsk(true)
                    }, 300)
                } else {
                    setToCategories(false)
                    setToAsk(true)
                    setFade(false)  
                    setAskDisplay(false)
                    if (!askDisplay && heroModeOn){
                        setOptionsBar("")
                    }
                    setTimeout(() => {
                        setToAsk(false)
                    }, 300)
                    setTimeout(() => {
                        setCantAffordDisplay(true)
                        setCategoryDisplay(false)
                    }, 250)
                    setTimeout(() => {
                        setFade(true)
                        setToAsk(false)
                        setTimeout(() => {
                            setCantAffordDisplay(false)
                            setCategoryDisplay(true)
                            setAskQuestion([])
                        }, 200)
                        setAskOption("")
                        setTimeout(() => {
                            setToCategories(true)        
                        }, 250)             
                    }, 1500)
                }
            }

    return(
        <div className="options-bar">
            <button className="scroll-arrow left" onClick={scrollLeft}>‹</button>
            <div className="options-display">
                <div className="options-scroll" ref={scrollRef}>
                    <div className="options-list">
                        <div className="ghost-div"></div> 
                        <button 
                            className={`
                                ${askOption === "blue" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shirt.blue, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shirt.blue, "shirt", "blue", calcPrice(askMinResults.shirt.blue, level, charityEnabled)])}
                            disabled={allOrNoneHave("shirt", "blue", charactersLeft)}
                        >
                            <div>Blue</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shirt.blue, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "green" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shirt.blue, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shirt.green, "shirt", "green", calcPrice(askMinResults.shirt.green, level, charityEnabled)])}
                            disabled={allOrNoneHave("shirt", "green", charactersLeft)}
                        >
                            <div>Green</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shirt.green, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "pink" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shirt.pink, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shirt.pink, "shirt", "pink", calcPrice(askMinResults.shirt.pink, level, charityEnabled)])}
                            disabled={allOrNoneHave("shirt", "pink", charactersLeft)}
                        >
                            <div>Pink</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shirt.pink, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "purple" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shirt.purple, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shirt.purple, "shirt", "purple", calcPrice(askMinResults.shirt.purple, level, charityEnabled)])}
                            disabled={allOrNoneHave("shirt", "purple", charactersLeft)}
                        >
                            <div>Purple</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shirt.purple, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "red" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shirt.red, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shirt.red, "shirt", "red", calcPrice(askMinResults.shirt.red, level, charityEnabled)])}
                            disabled={allOrNoneHave("shirt", "red", charactersLeft)}
                        >
                            <div>Red</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shirt.red, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "white" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shirt.white, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shirt.white, "shirt", "white", calcPrice(askMinResults.shirt.white, level, charityEnabled)])}
                            disabled={allOrNoneHave("shirt", "white", charactersLeft)}
                        >
                            <div>White</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shirt.white, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}