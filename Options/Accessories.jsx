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

        el.scrollTo({ left: newLeft, behavior: 'smooth' });
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
                        <button onClick={() => setQuestion([acc.any, "accessories", "none"])}>Any</button>
                        <button onClick={() => setQuestion([acc.animals, "accessories", "animals"])}>Animals</button>
                        <button onClick={() => setQuestion([acc.badge, "accessories", "badge"])}>Badge</button>
                        <button onClick={() => setQuestion([acc.basketball, "accessories", "basketball"])}>Basketball</button>
                        <button onClick={() => setQuestion([acc.books, "accessories", "books"])}>Books</button>
                        <button onClick={() => setQuestion([acc.broom, "accessories", "broom"])}>Broom</button>
                        <button onClick={() => setQuestion([acc.clipboard, "accessories", "clipboard"])}>Clipboard</button>
                        <button onClick={() => setQuestion([acc.computer, "accessories", "computer"])}>Computer</button>
                        <button onClick={() => setQuestion([acc.mask, "accessories", "mask"])}>Mask</button>
                        <button onClick={() => setQuestion([acc.math, "accessories", "math stuff"])}>Math</button>
                        <button onClick={() => setQuestion([acc.pad, "accessories", "writing pad"])}>Note Pad</button>  
                        <button onClick={() => setQuestion([acc.purse, "accessories", "purse"])}>Purse</button>
                        <button onClick={() => setQuestion([acc.science, "accessories", "science stuff"])}>Science</button>
                        <button onClick={() => setQuestion([acc.whistle, "accessories", "whistle"])}>Whistle</button>
                        <div class="ghost-div"></div>                                    
                    </div>
                </div>
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}