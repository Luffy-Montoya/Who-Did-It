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

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, charactersLeft} = React.useContext(LayoutContext)
    
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
                        <button onClick={() => setQuestion([acc.any, "accessories", "none", calcPrice(askMinResults.acc.any, charactersLeft.length)])}>
                            <div>Any</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.any, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.animals, "accessories", "animals", calcPrice(askMinResults.acc.animals, charactersLeft.length)])}>
                            <div>Animals</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.animals, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.badge, "accessories", "badge", calcPrice(askMinResults.acc.badge, charactersLeft.length)])}>
                            <div>Badge</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.badge, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.basketball, "accessories", "basketball", calcPrice(askMinResults.acc.basketball, charactersLeft.length)])}>
                            <div>Basketball</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.basketball, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.books, "accessories", "books", calcPrice(askMinResults.acc.books, charactersLeft.length)])}>
                            <div>Books</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.books, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.broom, "accessories", "broom", calcPrice(askMinResults.acc.broom, charactersLeft.length)])}>
                            <div>Broom</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.broom, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.clipboard, "accessories", "clipboard", calcPrice(askMinResults.acc.clipboard, charactersLeft.length)])}>
                            <div>Clipboard</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.clipboard, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.computer, "accessories", "computer", calcPrice(askMinResults.acc.computer, charactersLeft.length)])}>
                            <div>Computer</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.computer, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.mask, "accessories", "mask", calcPrice(askMinResults.acc.mask, charactersLeft.length)])}>
                            <div>Mask</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.mask, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.math, "accessories", "math stuff", calcPrice(askMinResults.acc.math, charactersLeft.length)])}>
                            <div>Math</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.math, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.pad, "accessories", "writing pad", calcPrice(askMinResults.acc.notepad, charactersLeft.length)])}>
                            <div>Notepad</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.notepad, charactersLeft.length))}</div>
                        </button>  
                        <button onClick={() => setQuestion([acc.purse, "accessories", "purse", calcPrice(askMinResults.acc.purse, charactersLeft.length)])}>
                            <div>Purse</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.purse, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.science, "accessories", "science stuff", calcPrice(askMinResults.acc.science, charactersLeft.length)])}>
                            <div>Science</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.science, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.watch, "accessories", "watch", calcPrice(askMinResults.acc.watch, charactersLeft.length)])}>
                            <div>Watch</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.watch, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([acc.whistle, "accessories", "whistle", calcPrice(askMinResults.acc.whistle, charactersLeft.length)])}>
                            <div>Whistle</div>
                            <div className="price">{cost(calcPrice(askMinResults.acc.whistle, charactersLeft.length))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}