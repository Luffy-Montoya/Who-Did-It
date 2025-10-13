import React from "react"
import { acc } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"

export default function Accessories() {
     
    const scrollRef = React.useRef();

    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, askOption} = React.useContext(LayoutContext)
    
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
                            className={askOption === "none" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.any, "accessories", "none", calcPrice(askMinResults.acc.any)])}
                        >
                            <div>Any</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.any))}</div>
                        </button>
                        <button 
                            className={askOption === "animals" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.animals, "accessories", "animals", calcPrice(askMinResults.acc.animals)])}
                        >
                            <div>Animals</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.animals))}</div>
                        </button>
                        <button 
                            className={askOption === "badge" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.badge, "accessories", "badge", calcPrice(askMinResults.acc.badge)])}
                        >
                            <div>Badge</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.badge))}</div>
                        </button>
                        <button 
                            className={askOption === "basketball" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.basketball, "accessories", "basketball", calcPrice(askMinResults.acc.basketball)])}
                        >
                            <div>Basketball</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.basketball))}</div>
                        </button>
                        <button 
                            className={askOption === "books" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.books, "accessories", "books", calcPrice(askMinResults.acc.books)])}
                            >
                            <div>Books</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.books))}</div>
                        </button>
                        <button 
                            className={askOption === "broom" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.broom, "accessories", "broom", calcPrice(askMinResults.acc.broom)])}
                        >
                            <div>Broom</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.broom))}</div>
                        </button>
                        <button 
                            className={askOption === "clipboard" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.clipboard, "accessories", "clipboard", calcPrice(askMinResults.acc.clipboard)])}
                        >
                            <div>Clipboard</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.clipboard))}</div>
                        </button>
                        <button 
                            className={askOption === "computer" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.computer, "accessories", "computer", calcPrice(askMinResults.acc.computer)])}
                        >
                            <div>Computer</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.computer))}</div>
                        </button>
                        <button 
                            className={askOption === "mask" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.mask, "accessories", "mask", calcPrice(askMinResults.acc.mask)])}
                        >
                            <div>Mask</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.mask))}</div>
                        </button>
                        <button 
                            className={askOption === "math stuff" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.math, "accessories", "math stuff", calcPrice(askMinResults.acc.math)])}
                        >
                            <div>Math</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.math))}</div>
                        </button>
                        <button 
                            className={askOption === "writing pad" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.pad, "accessories", "writing pad", calcPrice(askMinResults.acc.notepad)])}
                        >
                            <div>Notepad</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.notepad))}</div>
                        </button>  
                        <button 
                            className={askOption === "purse" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.purse, "accessories", "purse", calcPrice(askMinResults.acc.purse)])}
                        >
                            <div>Purse</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.purse))}</div>
                        </button>
                        <button 
                            className={askOption === "science stuff" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.science, "accessories", "science stuff", calcPrice(askMinResults.acc.science)])}
                        >
                            <div>Science</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.science))}</div>
                        </button>
                        <button 
                            className={askOption === "watch" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.watch, "accessories", "watch", calcPrice(askMinResults.acc.watch)])}
                        >
                            <div>Watch</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.watch))}</div>
                        </button>
                        <button 
                            className={askOption === "whistle" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.whistle, "accessories", "whistle", calcPrice(askMinResults.acc.whistle)])}
                        >
                            <div>Whistle</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.whistle))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}