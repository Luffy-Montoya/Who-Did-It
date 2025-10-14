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
                            className={askOption === "male" ? "category-selected" : ""}
                            onClick={() => setQuestion([genderSkin.man, "gender", "male", calcPrice(askMinResults.genderSkin.man)])}
                            disabled={
                                allOrNoneHave("gender", "male", charactersLeft) || 
                                asked.some(pair => pair[0] === "gender" && pair[1] === "male")
                            }
                        >
                            <div>Man</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.man))}</div>
                        </button>
                        <button 
                            className={askOption === "female" ? "category-selected" : ""}
                            onClick={() => setQuestion([genderSkin.woman, "gender", "female", calcPrice(askMinResults.genderSkin.woman)])}
                            disabled={
                                allOrNoneHave("gender", "female", charactersLeft) || 
                                asked.some(pair => pair[0] === "gender" && pair[1] === "female")
                            }
                        >
                            <div>Woman</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.woman))}</div>
                        </button>
                        <button 
                            className={askOption === "light" ? "category-selected" : ""}
                            onClick={() => setQuestion([genderSkin.light, "skin", "light", calcPrice(askMinResults.genderSkin.light)])}
                            disabled={
                                allOrNoneHave("skin", "light", charactersLeft) || 
                                asked.some(pair => pair[0] === "skin" && pair[1] === "light")
                            }
                        >
                            <div>Light Skin</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.light))}</div>
                        </button>
                        <button 
                            className={askOption === "dark" ? "category-selected" : ""}
                            onClick={() => setQuestion([genderSkin.dark, "skin", "dark", calcPrice(askMinResults.genderSkin.dark)])}
                            disabled={
                                allOrNoneHave("skin", "dark", charactersLeft) || 
                                asked.some(pair => pair[0] === "skin" && pair[1] === "dark")
                            }
                        >
                            <div>Dark Skin</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.dark))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}