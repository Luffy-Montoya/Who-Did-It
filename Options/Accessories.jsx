import React from "react"
import { acc } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Accessories() {
     
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
                        <button onClick={() => setQuestion([acc.any, "accessories", "none"])}><div>Any</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([acc.animals, "accessories", "animals"])}><div>Animals</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([acc.badge, "accessories", "badge"])}><div>Badge</div><div className="price">{cost(5)}</div></button>
                        <button onClick={() => setQuestion([acc.basketball, "accessories", "basketball"])}><div>Basketball</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.books, "accessories", "books"])}><div>Books</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([acc.broom, "accessories", "broom"])}><div>Broom</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.clipboard, "accessories", "clipboard"])}><div>Clipboard</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.computer, "accessories", "computer"])}><div>Computer</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.mask, "accessories", "mask"])}><div>Mask</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.math, "accessories", "math stuff"])}><div>Math</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.pad, "accessories", "writing pad"])}><div>Notepad</div><div className="price">{cost(2)}</div></button>  
                        <button onClick={() => setQuestion([acc.purse, "accessories", "purse"])}><div>Purse</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([acc.science, "accessories", "science stuff"])}><div>Science</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.whistle, "accessories", "whistle"])}><div>Whistle</div><div className="price">{cost(3)}</div></button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}