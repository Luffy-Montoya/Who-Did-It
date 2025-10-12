import React from "react"
import { pants } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"
import { askMinResults, calcPrice } from "../Functions/askPrice"

export default function Pants() {

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
                        <button onClick={() => setQuestion([pants.any, "pants", "none", calcPrice(askMinResults.pants.any)])}>
                            <div>Any</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.any))}</div>
                        </button>
                        <button onClick={() => setQuestion([pants.black, "pants", "black", calcPrice(askMinResults.pants.black)])}>
                            <div>Black</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.black))}</div>
                        </button>
                        <button onClick={() => setQuestion([pants.blue, "pants", "blue", calcPrice(askMinResults.pants.blue)])}>
                            <div>Blue</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.blue))}</div>
                        </button>
                        <button onClick={() => setQuestion([pants.brown, "pants", "brown", calcPrice(askMinResults.pants.brown)])}>
                            <div>Brown</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.brown))}</div>
                        </button>
                        <button onClick={() => setQuestion([pants.gray, "pants", "gray", calcPrice(askMinResults.pants.gray)])}>
                            <div>Gray</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.gray))}</div>
                        </button>
                        <button onClick={() => setQuestion([pants.green, "pants", "green", calcPrice(askMinResults.pants.green)])}>
                            <div>Green</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.green))}</div>
                        </button>
                        <button onClick={() => setQuestion([pants.magenta, "pants", "magenta", calcPrice(askMinResults.pants.magenta)])}>
                            <div>Magenta</div>
                            <div className="price">{cost(calcPrice(askMinResults.pants.magenta))}</div>
                        </button>
                        <div className="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}