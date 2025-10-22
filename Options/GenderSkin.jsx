import React from "react"
import { genderSkin } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"
import { allOrNoneHave } from "../Functions/allOrNoneHave"

export default function GenderSkin() {

    const scrollRef = React.useRef();
        
    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { 
            setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, 
            setAskOption, askOption, charactersLeft, setToAsk, setToCategories,
            setFade, level, wallet, setCantAffordDisplay, setOptionsBar, askDisplay,
            heroModeOn } = React.useContext(LayoutContext)
        
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
                            className={askOption === "male" ? "category-selected" : ""}
                            onClick={() => setQuestion([genderSkin.man, "gender", "male", calcPrice(askMinResults.genderSkin.male, level)])}
                            disabled={allOrNoneHave("gender", "male", charactersLeft)}
                        >
                            <div>Man</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.male, level))}</div>
                        </button>
                        <button 
                            className={askOption === "female" ? "category-selected" : ""}
                            onClick={() => setQuestion([genderSkin.woman, "gender", "female", calcPrice(askMinResults.genderSkin.female, level)])}
                            disabled={allOrNoneHave("gender", "female", charactersLeft)}
                        >
                            <div>Woman</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.female, level))}</div>
                        </button>
                        <button 
                            className={askOption === "light" ? "category-selected" : ""}
                            onClick={() => setQuestion([genderSkin.light, "skin", "light", calcPrice(askMinResults.genderSkin.light, level)])}
                            disabled={allOrNoneHave("skin", "light", charactersLeft)}
                        >
                            <div>Light Skin</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.light, level))}</div>
                        </button>
                        <button 
                            className={askOption === "dark" ? "category-selected" : ""}
                            onClick={() => setQuestion([genderSkin.dark, "skin", "dark", calcPrice(askMinResults.genderSkin.dark, level)])}
                            disabled={allOrNoneHave("skin", "dark", charactersLeft)}
                        >
                            <div>Dark Skin</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.dark, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}