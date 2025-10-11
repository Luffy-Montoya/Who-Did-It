import React from "react"
import { acc } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function Accessories() {
     
    const scrollRef = React.useRef();

    function getButtonMetrics(el) {
        const buttons = el.querySelectorAll('button');
        if (buttons.length < 2) return { buttonWidth: 0, gap: 0 };

        const buttonWidth = buttons[0].offsetWidth;
        const rect1 = buttons[0].getBoundingClientRect();
        const rect2 = buttons[1].getBoundingClientRect();

        // Gap = distance between right edge of first button and left edge of second
        const gap = rect2.left - rect1.right;

        return { buttonWidth, gap };
    }

    function scrollRight() {
        const el = scrollRef.current;
        if (!el) return;

        const { buttonWidth, gap } = getButtonMetrics(el);
        const step = (buttonWidth + gap) * 4; // always 4 visible buttons worth
        const maxScroll = el.scrollWidth - el.clientWidth;
        const newLeft = Math.min(el.scrollLeft + step, maxScroll);

        el.scrollTo({ left: newLeft + 1, behavior: 'smooth' });
    }

    function scrollLeft() {
        const el = scrollRef.current;
        if (!el) return;

        const { buttonWidth, gap } = getButtonMetrics(el);
        const step = (buttonWidth + gap) * 4;
        const newLeft = Math.max(el.scrollLeft - step, 0);

        el.scrollTo({ left: newLeft, behavior: 'smooth' });
    }

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
                        <button onClick={() => setQuestion([acc.any, "accessories", "none"])}><div>Any</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.animals, "accessories", "animals"])}><div>Animals</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.badge, "accessories", "badge"])}><div>Badge</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.basketball, "accessories", "basketball"])}><div>Basketball</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.books, "accessories", "books"])}><div>Books</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.broom, "accessories", "broom"])}><div>Broom</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.clipboard, "accessories", "clipboard"])}><div>Clipboard</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.computer, "accessories", "computer"])}><div>Computer</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.mask, "accessories", "mask"])}><div>Mask</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.math, "accessories", "math stuff"])}><div>Math</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.pad, "accessories", "writing pad"])}><div>Notepad</div><div className="cost">15</div></button>  
                        <button onClick={() => setQuestion([acc.purse, "accessories", "purse"])}><div>Purse</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.science, "accessories", "science stuff"])}><div>Science</div><div className="cost">15</div></button>
                        <button onClick={() => setQuestion([acc.whistle, "accessories", "whistle"])}><div>Whistle</div><div className="cost">15</div></button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}