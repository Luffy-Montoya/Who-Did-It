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
                                ${wallet < calcPrice(askMinResults.hair.black, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([hair.black, "hair", "black", calcPrice(askMinResults.hair.black, level, charityEnabled)])}
                            disabled={allOrNoneHave("hair", "black", charactersLeft)}
                        >
                            <div>Black</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.hair.black, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "blonde" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.hair.blonde, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([hair.blonde, "hair", "blonde", calcPrice(askMinResults.hair.blonde, level, charityEnabled)])}
                            disabled={allOrNoneHave("hair", "blonde", charactersLeft)}
                        >
                            <div>Blonde</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.hair.blonde, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "brown" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.hair.brown, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([hair.brown, "hair", "brown", calcPrice(askMinResults.hair.brown, level, charityEnabled)])}
                            disabled={allOrNoneHave("hair", "brown", charactersLeft)}
                        >
                            <div>Brown</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.hair.brown, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "gray" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.hair.gray, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([hair.gray, "hair", "gray", calcPrice(askMinResults.hair.gray, level, charityEnabled)])}
                            disabled={allOrNoneHave("hair", "gray", charactersLeft)}
                        >
                            <div>Gray</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.hair.gray, level))}</div>
                        </button>
                        <button 
                            className={`
                                ${askOption === "orange" ? "category-selected" : ""}
                                ${wallet < calcPrice(askMinResults.hair.orange, level, charityEnabled) ? "cant-afford" : ""}
                                `}
                            onClick={() => setQuestion([hair.orange, "hair", "orange", calcPrice(askMinResults.hair.orange, level, charityEnabled)])}
                            disabled={allOrNoneHave("hair", "orange", charactersLeft)}
                        >
                            <div>Orange</div>
                            <div className="price">{charityEnabled ? <span className="free">Free</span> : cost(calcPrice(askMinResults.hair.orange, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}