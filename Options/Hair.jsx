import React from "react"
import { hair } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Hair() {

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
                        <button onClick={() => setQuestion([hair.black, "hair", "black"])}><div>Black</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([hair.brown, "hair", "brown"])}><div>Brown</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([hair.blonde, "hair", "blonde"])}><div>Blonde</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([hair.orange, "hair", "orange"])}><div>Orange</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([hair.gray, "hair", "gray"])}><div>Gray</div><div className="price">{cost(7)}</div></button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}