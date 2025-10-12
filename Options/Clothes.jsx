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
                        <button onClick={() => setQuestion([clothes.apron, "clothes", "apron", calcPrice(askMinResults.clothes.apron, charactersLeft.length)])}>
                            <div>Apron</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.apron, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([clothes.jacket, "clothes", "jacket", calcPrice(askMinResults.clothes.jacket, charactersLeft.length)])}>
                            <div>Jacket</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.jacket, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([clothes.pants, "clothes", "pants", calcPrice(askMinResults.clothes.pants, charactersLeft.length)])}>
                            <div>Pants</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.pants, charactersLeft.length))}</div>
                        </button> 
                        <button onClick={() => setQuestion([clothes.skirt, "clothes", "skirt", calcPrice(askMinResults.clothes.skirt, charactersLeft.length)])}>
                            <div>Skirt</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.skirt, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([clothes.suit, "clothes", "suit", calcPrice(askMinResults.clothes.suit, charactersLeft.length)])}>
                            <div>Suit</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.suit, charactersLeft.length))}</div>
                        </button>
                        <button onClick={() => setQuestion([clothes.tie, "clothes", "tie", calcPrice(askMinResults.clothes.tie, charactersLeft.length)])}>
                            <div>Tie</div>
                            <div className="price">{cost(calcPrice(askMinResults.clothes.tie, charactersLeft.length))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}