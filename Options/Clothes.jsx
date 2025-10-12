import React from "react"
import { clothes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"

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
                        <div className="ghost-div"></div> 
                        <button onClick={() => setQuestion([clothes.apron, "clothes", "apron", calcPrice(askMinResults.clothes.apron)])}>
                            <div>Apron</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.apron))}</div>
                        </button>
                        <button onClick={() => setQuestion([clothes.jacket, "clothes", "jacket", calcPrice(askMinResults.clothes.jacket)])}>
                            <div>Jacket</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.jacket))}</div>
                        </button>
                        <button onClick={() => setQuestion([clothes.pants, "clothes", "pants", calcPrice(askMinResults.clothes.pants)])}>
                            <div>Pants</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.pants))}</div>
                        </button> 
                        <button onClick={() => setQuestion([clothes.skirt, "clothes", "skirt", calcPrice(askMinResults.clothes.skirt)])}>
                            <div>Skirt</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.skirt))}</div>
                        </button>
                        <button onClick={() => setQuestion([clothes.suit, "clothes", "suit", calcPrice(askMinResults.clothes.suit)])}>
                            <div>Suit</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.suit))}</div>
                        </button>
                        <button onClick={() => setQuestion([clothes.tie, "clothes", "tie", calcPrice(askMinResults.clothes.tie)])}>
                            <div>Tie</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.tie))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}