import React from "react"
import { shoes } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"

export default function Shoes() {

    const scrollRef = React.useRef();
    
    const { scrollLeft, scrollRight } = useScrollFunctions(scrollRef)

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice } = React.useContext(LayoutContext)
    
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
                        <button onClick={() => setQuestion([shoes.black, "shoes", "black", calcPrice(askMinResults.shoes.black)])}>
                            <div>Black</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.black))}</div>
                        </button>
                        <button onClick={() => setQuestion([shoes.blue, "shoes", "blue", calcPrice(askMinResults.shoes.blue)])}>
                            <div>Blue</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.blue))}</div>
                        </button>
                        <button onClick={() => setQuestion([shoes.brown, "shoes", "brown", calcPrice(askMinResults.shoes.brown)])}>
                            <div>Brown</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.brown))}</div>
                        </button>
                        <button onClick={() => setQuestion([shoes.gray, "shoes", "gray", calcPrice(askMinResults.shoes.gray)])}>
                            <div>Gray</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.gray))}</div>
                        </button>
                        <button onClick={() => setQuestion([shoes.purple, "shoes", "purple", calcPrice(askMinResults.shoes.purple)])}>
                            <div>Purple</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.purple))}</div>
                        </button>
                        <button onClick={() => setQuestion([shoes.red, "shoes", "red", calcPrice(askMinResults.shoes.red)])}>
                            <div>Red</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.red))}</div>
                        </button>
                        <button onClick={() => setQuestion([shoes.white, "shoes", "white", calcPrice(askMinResults.shoes.white)])}>
                            <div>White</div>
                            <div className="price">{cost(calcPrice(askMinResults.shoes.white))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}