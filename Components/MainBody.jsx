import React from "react"
import { characters } from "../characters"
import { shuffleCharacters } from "../Functions/shuffleCharacters"

export default function MainBody() {

    const [shuffled, setShuffled] = React.useState([])
    const [active, setActive] = React.useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false,
        19: false,
        20: false,
        21: false,
        22: false,
        23: false,
        24: false,
    })

    React.useEffect(() => {
        setShuffled(shuffleCharacters(characters))
    }, [])

    const selectCharacter = (id) => {
        setActive(prev => ({...prev, [id]: true}))
        console.log(active[id])
    }
    
    const characterMap = shuffled.map((character, index) => (
        <div 
            className={`character-container ${active[index] ? "active" : ""}`}
            onClick={() => selectCharacter(index)}
            key={index}
        >
            <img className="characters" src={character.image}></img>
            <p className="character-name">{character.name}</p>
        </div>
    
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