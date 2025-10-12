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
                        <div className="ghost-div"></div>  
                        <button onClick={() => setQuestion([acc.any, "accessories", "none", 9])}><div>Any</div><div className="price">{cost(9)}</div></button>
                        <button onClick={() => setQuestion([acc.animals, "accessories", "animals", 3])}><div>Animals</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([acc.badge, "accessories", "badge", 6])}><div>Badge</div><div className="price">{cost(6)}</div></button>
                        <button onClick={() => setQuestion([acc.basketball, "accessories", "basketball", 2])}><div>Basketball</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.books, "accessories", "books", 3])}><div>Books</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([acc.broom, "accessories", "broom", 2])}><div>Broom</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.clipboard, "accessories", "clipboard", 2])}><div>Clipboard</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.computer, "accessories", "computer", 2])}><div>Computer</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.mask, "accessories", "mask", 2])}><div>Mask</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.math, "accessories", "math stuff", 2])}><div>Math</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.pad, "accessories", "writing pad", 2])}><div>Notepad</div><div className="price">{cost(2)}</div></button>  
                        <button onClick={() => setQuestion([acc.purse, "accessories", "purse", 3])}><div>Purse</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([acc.science, "accessories", "science stuff", 2])}><div>Science</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([acc.whistle, "accessories", "whistle", 3])}><div>Whistle</div><div className="price">{cost(3)}</div></button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}