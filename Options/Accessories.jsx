import React from "react"
import { acc } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"
import { allOrNoneHave } from "../Functions/allOrNoneHave"

export default function Accessories() {
     
    const scrollRef = React.useRef();

    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { 
        setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, 
        setAskOption, askOption, charactersLeft, setToAsk, setToCategories,
        setFade, level } = React.useContext(LayoutContext)
    
    function setQuestion(question, option, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, setAskOption, question, option, key)
        setFade(false)
        setToCategories(false)
        setTimeout(() => {
            setToAsk(true)
        }, 300)
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
                            onClick={() => setQuestion([acc.none, "accessories", "none", calcPrice(askMinResults.acc.none, level)])}
                            disabled={allOrNoneHave("accessories", "none", charactersLeft)}
                        >
                            <div>None</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.none, level))}</div>
                        </button>
                        <button 
                            className={askOption === "animals" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.animals, "accessories", "animals", calcPrice(askMinResults.acc.animals, level)])}
                            disabled={allOrNoneHave("accessories", "animals", charactersLeft)}
                        >
                            <div>Animals</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.animals, level))}</div>
                        </button>
                        <button 
                            className={askOption === "badge" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.badge, "accessories", "badge", calcPrice(askMinResults.acc.badge, level)])}
                            disabled={allOrNoneHave("accessories", "badge", charactersLeft)}
                        >
                            <div>Badge</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.badge, level))}</div>
                        </button>
                        <button 
                            className={askOption === "basketball" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.basketball, "accessories", "basketball", calcPrice(askMinResults.acc.basketball, level)])}
                            disabled={allOrNoneHave("accessories", "basketball", charactersLeft)}
                        >
                            <div>Basketball</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.basketball, level))}</div>
                        </button>
                        <button 
                            className={askOption === "books" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.books, "accessories", "books", calcPrice(askMinResults.acc.books, level)])}
                            disabled={allOrNoneHave("accessories", "books", charactersLeft)}
                            >
                            <div>Books</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.books, level))}</div>
                        </button>
                        <button 
                            className={askOption === "broom" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.broom, "accessories", "broom", calcPrice(askMinResults.acc.broom, level)])}
                            disabled={allOrNoneHave("accessories", "broom", charactersLeft)}
                        >
                            <div>Broom</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.broom, level))}</div>
                        </button>
                        <button 
                            className={askOption === "clipboard" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.clipboard, "accessories", "clipboard", calcPrice(askMinResults.acc.clipboard, level)])}
                            disabled={allOrNoneHave("accessories", "clipboard", charactersLeft)}
                        >
                            <div>Clipboard</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.clipboard, level))}</div>
                        </button>
                        <button 
                            className={askOption === "computer" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.computer, "accessories", "computer", calcPrice(askMinResults.acc.computer, level)])}
                            disabled={allOrNoneHave("accessories", "computer", charactersLeft)}
                        >
                            <div>Computer</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.computer, level))}</div>
                        </button>
                        <button 
                            className={askOption === "mask" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.mask, "accessories", "mask", calcPrice(askMinResults.acc.mask, level)])}
                            disabled={allOrNoneHave("accessories", "mask", charactersLeft)}
                        >
                            <div>Mask</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.mask, level))}</div>
                        </button>
                        <button 
                            className={askOption === "math" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.math, "accessories", "math", calcPrice(askMinResults.acc.math, level)])}
                            disabled={allOrNoneHave("accessories", "math", charactersLeft)}
                        >
                            <div>Math</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.math, level))}</div>
                        </button>
                        <button 
                            className={askOption === "notepad" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.pad, "accessories", "notepad", calcPrice(askMinResults.acc.notepad, level)])}
                            disabled={allOrNoneHave("accessories", "notepad", charactersLeft)}
                        >
                            <div>Notepad</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.notepad, level))}</div>
                        </button>  
                        <button 
                            className={askOption === "purse" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.purse, "accessories", "purse", calcPrice(askMinResults.acc.purse, level)])}
                            disabled={allOrNoneHave("accessories", "purse", charactersLeft)}
                        >
                            <div>Purse</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.purse, level))}</div>
                        </button>
                        <button 
                            className={askOption === "science" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.science, "accessories", "science", calcPrice(askMinResults.acc.science, level)])}
                            disabled={allOrNoneHave("accessories", "science", charactersLeft)}
                        >
                            <div>Science</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.science, level))}</div>
                        </button>
                        <button 
                            className={askOption === "watch" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.watch, "accessories", "watch", calcPrice(askMinResults.acc.watch, level)])}
                            disabled={allOrNoneHave("accessories", "watch", charactersLeft)}
                        >
                            <div>Watch</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.watch, level))}</div>
                        </button>
                        <button 
                            className={askOption === "whistle" ? "category-selected" : ""} 
                            onClick={() => setQuestion([acc.whistle, "accessories", "whistle", calcPrice(askMinResults.acc.whistle, level)])}
                            disabled={allOrNoneHave("accessories", "whistle", charactersLeft)}
                        >
                            <div>Whistle</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.whistle, level))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}