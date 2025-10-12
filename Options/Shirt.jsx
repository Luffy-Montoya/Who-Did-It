import React from "react"
import { shirt } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Shirt() {

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
                        <button onClick={() => setQuestion([shirt.red, "shirt", "red", 3])}><div>Red</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([shirt.blue, "shirt", "blue", 10])}><div>Blue</div><div className="price">{cost(10)}</div></button>
                        <button onClick={() => setQuestion([shirt.green, "shirt", "green", 5])}><div>Green</div><div className="price">{cost(5)}</div></button>
                        <button onClick={() => setQuestion([shirt.purple, "shirt", "purple", 7])}><div>Purple</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([shirt.pink, "shirt", "pink", 7])}><div>Pink</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([shirt.white, "shirt", "white", 3])}><div>White</div><div className="price">{cost(3)}</div></button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}