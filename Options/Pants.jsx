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
                                ${askOption === "none" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.pants.none, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([pants.none, "pants", "none", calcPrice(askMinResults.pants.none, level, charityEnabled)])}
                            disabled={allOrNoneHave("pants", "none", charactersLeft)}
                        >
                            <div>None</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.pants.none, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "black" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.pants.black, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([pants.black, "pants", "black", calcPrice(askMinResults.pants.black, level, charityEnabled)])}
                            disabled={allOrNoneHave("pants", "black", charactersLeft)}
                        >
                            <div>Black</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.pants.black, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "blue" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.pants.blue, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([pants.blue, "pants", "blue", calcPrice(askMinResults.pants.blue, level, charityEnabled)])}
                            disabled={allOrNoneHave("pants", "blue", charactersLeft)}
                        >
                            <div>Blue</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.pants.blue, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "brown" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.pants.brown, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([pants.brown, "pants", "brown", calcPrice(askMinResults.pants.brown, level, charityEnabled)])}
                            disabled={allOrNoneHave("pants", "brown", charactersLeft)}
                        >
                            <div>Brown</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.pants.brown, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "gray" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.pants.gray, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([pants.gray, "pants", "gray", calcPrice(askMinResults.pants.gray, level, charityEnabled)])}
                            disabled={allOrNoneHave("pants", "gray", charactersLeft)}
                        >
                            <div>Gray</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.pants.gray, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "green" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.pants.green, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([pants.green, "pants", "green", calcPrice(askMinResults.pants.green, level, charityEnabled)])}
                            disabled={allOrNoneHave("pants", "green", charactersLeft)}
                        >
                            <div>Green</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.pants.green, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "magenta" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.pants.pink, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([pants.pink, "pants", "magenta", calcPrice(askMinResults.pants.pink, level, charityEnabled)])}
                            disabled={allOrNoneHave("pants", "magenta", charactersLeft)}
                        >
                            <div>Pink</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.pants.pink, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}