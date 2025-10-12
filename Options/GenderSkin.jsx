import React from "react"
import { genderSkin } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"

export default function GenderSkin() {

    const scrollRef = React.useRef();
        
    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, charactersLeft } = React.useContext(LayoutContext)
    
    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-bar">
            <button className="scroll-arrow left" onClick={scrollLeft}>‹</button>
            <div className="options-display">
                <div className="options-scroll" ref={scrollRef}>
                    <div className="options-list">
                        <div className="ghost-div"></div>  
                        <button onClick={() => setQuestion([genderSkin.man, "gender", "male", calcPrice(askMinResults.genderSkin.man, charactersLeft.length)])}>
                            <div>Man</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.man, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([genderSkin.woman, "gender", "female", calcPrice(askMinResults.genderSkin.woman, charactersLeft.length)])}>
                            <div>Woman</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.woman, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([genderSkin.light, "skin", "light", calcPrice(askMinResults.genderSkin.light, charactersLeft.length)])}>
                            <div>Light Skin</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.light, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([genderSkin.dark, "skin", "dark", calcPrice(askMinResults.genderSkin.dark, charactersLeft.length)])}>
                            <div>Dark Skin</div>
                            <div className="price">{cost(calcPrice(askMinResults.genderSkin.dark, charactersLeft.length))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}