import React from "react"
import { clothes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Clothes() {

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
                        <button onClick={() => setQuestion([clothes.jacket, "clothes", "jacket"])}><div>Jacket</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([clothes.suit, "clothes", "suit"])}><div>Suit</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([clothes.tie, "clothes", "tie"])}><div>Tie</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([clothes.apron, "clothes", "apron"])}><div>Apron</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([clothes.skirt, "clothes", "skirt"])}><div>Skirt</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([clothes.pants, "clothes", "pants"])}><div>Pants</div><div className="price">{cost(7)}</div></button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}