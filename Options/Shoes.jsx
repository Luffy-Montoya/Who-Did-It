import React from "react"
import { shoes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Shoes() {

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
                        <button onClick={() => setQuestion([shoes.black, "shoes", "black"])}><div>Black</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([shoes.white, "shoes", "white"])}><div>White</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([shoes.gray, "shoes", "gray"])}><div>Gray</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([shoes.brown, "shoes", "brown"])}><div>Brown</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([shoes.blue, "shoes", "blue"])}><div>Blue</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([shoes.red, "shoes", "red"])}><div>Red</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([shoes.purple, "shoes", "purple"])}><div>Purple</div><div className="price">{cost(7)}</div></button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}