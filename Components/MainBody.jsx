import React from "react"
import { characters } from "../characters"
import { shuffleCharacters } from "../Functions/shuffleCharacters"

export default function MainBody() {

    const [shuffled, setShuffled] = React.useState([])
    const [big, setBig] = React.useState(false)

    React.useEffect(() => {
        setShuffled(shuffleCharacters(characters))
    }, [])
    
    const characterMap = shuffled.map((character, index) => (
        <img className="characters" src={character.image} key={index}></img>
    ))

    

    // const containerRef = React.useRef(null);

    // React.useEffect(() => {
    //     if (!containerRef.current) return;

    //     const container = containerRef.current;
    //     const count = characters.length;

    //     // pick columns based on closest square layout
    //     const cols = Math.ceil(Math.sqrt(count)) + 1;
    //     const rows = Math.ceil(count / cols);

    //     container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    //     container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    // }, [characters.length]); 


    return (
        // <div className="main-body" ref={containerRef}>
        <div className="main-body">
            {/* <button onClick={() => setBig(!big)}>Big</button> */}
            <div className="image-container">
                {characterMap}
            </div>
        </div>
    )
}