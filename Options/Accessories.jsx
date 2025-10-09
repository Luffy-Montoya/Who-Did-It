import React from "react"
import { acc } from "../questions"
import { LayoutContext } from "../Components/Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function Accessories() {
     
    const scrollRef = React.useRef();

    function scrollLeft() {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  }

  function scrollRight() {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  }

    const { setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice} = React.useContext(LayoutContext)
    
    function setQuestion(question, category, key){
        toggleQuestion(setAskQuestion, setCategoryDisplay, setAskDisplay, setPrice, question, category, key)
    }

    return(
        <div className="options-display">
            <button className="scroll-arrow left" onClick={scrollLeft}>‹</button>

            <div className="options-scroll" ref={scrollRef}>
                <div className="options-list">
                    <button onClick={() => setQuestion([acc.any, "accessories", "none"])}>Any</button>
                    <button onClick={() => setQuestion([acc.whistle, "accessories", "whistle"])}>Whistle</button>
                    <button onClick={() => setQuestion([acc.books, "accessories", "books"])}>Books</button>
                    <button onClick={() => setQuestion([acc.clipboard, "accessories", "clipboard"])}>Clipboard</button>
                    <button onClick={() => setQuestion([acc.purse, "accessories", "purse"])}>Purse</button>
                    <button onClick={() => setQuestion([acc.badge, "accessories", "badge"])}>Badge</button>
                    <button onClick={() => setQuestion([acc.math, "accessories", "math stuff"])}>Math Stuff</button>
                    <button onClick={() => setQuestion([acc.broom, "accessories", "broom"])}>Broom</button>
                    <button onClick={() => setQuestion([acc.animals, "accessories", "animals"])}>Animals</button>
                    <button onClick={() => setQuestion([acc.mask, "accessories", "mask"])}>Mask</button>
                    <button onClick={() => setQuestion([acc.basketball, "accessories", "basketball"])}>Basketball</button>
                    <button onClick={() => setQuestion([acc.computer, "accessories", "computer"])}>Computer</button>
                    <button onClick={() => setQuestion([acc.pad, "accessories", "writing pad"])}>Writing Pad</button>
                    <button onClick={() => setQuestion([acc.science, "accessories", "science stuff"])}>Science Stuff</button>
                </div>
            </div>

            <button className="scroll-arrow right" onClick={scrollRight}>›</button>
        </div>
    )
}