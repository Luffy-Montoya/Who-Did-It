import React from "react"
import { pants } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Pants() {

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
                        <div class="ghost-div"></div>  
                        <button onClick={() => setQuestion([pants.any, "pants", "none"])}>Any</button>
                        <button onClick={() => setQuestion([pants.blue, "pants", "blue"])}>Blue</button>
                        <button onClick={() => setQuestion([pants.gray, "pants", "gray"])}>Gray</button>
                        <button onClick={() => setQuestion([pants.black, "pants", "black"])}>Black</button>
                        <button onClick={() => setQuestion([pants.brown, "pants", "brown"])}>Brown</button>
                        <button onClick={() => setQuestion([pants.green, "pants", "green"])}>Green</button>
                        <button onClick={() => setQuestion([pants.magenta, "pants", "magenta"])}>Magenta</button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}