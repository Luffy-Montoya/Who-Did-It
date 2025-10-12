import React from "react"
import { genderSkin } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function GenderSkin() {

    const scrollRef = React.useRef();
        
    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)
    
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
                        <button onClick={() => setQuestion([genderSkin.man, "gender", "male", 13])}><div>Man</div><div className="price">{cost(13)}</div></button>
                        <button onClick={() => setQuestion([genderSkin.woman, "gender", "female", 13])}><div>Woman</div><div className="price">{cost(13)}</div></button>
                        <button onClick={() => setQuestion([genderSkin.light, "skin", "light", 17])}><div>Light Skin</div><div className="price">{cost(17)}</div></button>
                        <button onClick={() => setQuestion([genderSkin.dark, "skin", "dark", 17])}><div>Dark Skin</div><div className="price">{cost(17)}</div></button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}