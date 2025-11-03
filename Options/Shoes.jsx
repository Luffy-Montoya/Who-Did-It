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
                                ${askOption === "black" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shoes.black, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shoes.black, "shoes", "black", calcPrice(askMinResults.shoes.black, level, charityEnabled)])}
                            disabled={allOrNoneHave("shoes", "black", charactersLeft)}
                        >
                            <div>Black</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shoes.black, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "blue" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shoes.blue, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shoes.blue, "shoes", "blue", calcPrice(askMinResults.shoes.blue, level, charityEnabled)])}
                            disabled={allOrNoneHave("shoes", "blue", charactersLeft)}
                        >
                            <div>Blue</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shoes.blue, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "brown" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shoes.brown, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shoes.brown, "shoes", "brown", calcPrice(askMinResults.shoes.brown, level, charityEnabled)])}
                            disabled={allOrNoneHave("shoes", "brown", charactersLeft)}
                        >
                            <div>Brown</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shoes.brown, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "gray" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shoes.gray, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shoes.gray, "shoes", "gray", calcPrice(askMinResults.shoes.gray, level, charityEnabled)])}
                            disabled={allOrNoneHave("shoes", "gray", charactersLeft)}
                        >
                            <div>Gray</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shoes.gray, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "purple" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shoes.purple, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shoes.purple, "shoes", "purple", calcPrice(askMinResults.shoes.purple, level, charityEnabled)])}
                            disabled={allOrNoneHave("shoes", "purple", charactersLeft)}
                        >
                            <div>Purple</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shoes.purple, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "red" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shoes.red, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shoes.red, "shoes", "red", calcPrice(askMinResults.shoes.red, level, charityEnabled)])}
                            disabled={allOrNoneHave("shoes", "red", charactersLeft)}
                        >
                            <div>Red</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shoes.red, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "white" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.shoes.white, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([shoes.white, "shoes", "white", calcPrice(askMinResults.shoes.white, level, charityEnabled)])}
                            disabled={allOrNoneHave("shoes", "white", charactersLeft)}
                        >
                            <div>White</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.shoes.white, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}