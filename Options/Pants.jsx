import React from "react"
import { pants } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { useScrollFunctions } from "../Functions/ScrollFunctions"
import { cost } from "../Functions/cost"

export default function Pants() {

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
                        <button onClick={() => setQuestion([pants.any, "pants", "none"])}><div>Any</div><div className="price">{cost(7)}</div></button>
                        <button onClick={() => setQuestion([pants.blue, "pants", "blue"])}><div>Blue</div><div className="price">{cost(10)}</div></button>
                        <button onClick={() => setQuestion([pants.gray, "pants", "gray"])}><div>Gray</div><div className="price">{cost(9)}</div></button>
                        <button onClick={() => setQuestion([pants.black, "pants", "black"])}><div>Black</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([pants.brown, "pants", "brown"])}><div>Brown</div><div className="price">{cost(3)}</div></button>
                        <button onClick={() => setQuestion([pants.green, "pants", "green"])}><div>Green</div><div className="price">{cost(2)}</div></button>
                        <button onClick={() => setQuestion([pants.magenta, "pants", "magenta"])}><div>Magenta</div><div className="price">{cost(2)}</div></button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}