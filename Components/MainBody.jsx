import React from "react"
import { characters } from "../characters"
import { shuffleCharacters } from "../Functions/shuffleCharacters"

export default function MainBody() {

    const [shuffled, setShuffled] = React.useState([])
    const [charactersLeft, setCharactersLeft] = React.useState([])
    const [firstArrange, setFirstArrange] = React.useState([])
    const [isFirstArrange, setisFirstArrange] = React.useState(false)
    const [row1, setRow1] = React.useState([])
    const [row2, setRow2] = React.useState([])
    const [row3, setRow3] = React.useState([])
    const [row4, setRow4] = React.useState([])
        
    const [active, setActive] = React.useState({})

    React.useEffect(() => {
        const shuffledChars = shuffleCharacters(characters)
        setShuffled(shuffledChars)
        setCharactersLeft(shuffledChars)
    }, [])

    const arranged = React.useRef(false);

    React.useEffect(() => {
    if (!arranged.current && charactersLeft.length > 0) {
        setRow1(charactersLeft.slice(0, 6));
        setRow2(charactersLeft.slice(6, 12));
        setRow3(charactersLeft.slice(12, 18));
        setRow4(charactersLeft.slice(18));
        arranged.current = true; // ✅ lock it so it won’t run again
    }
    }, [charactersLeft]);


        // if (charactersLeft.length < 16 ) {

        // setRow1(charactersLeft.slice(0, Math.ceil(charactersLeft.length / 3)))
        // setRow2(charactersLeft.slice(Math.ceil(charactersLeft.length / 3), Math.ceil(charactersLeft.length / 1.5)))
        // setRow3(charactersLeft.slice(Math.ceil(charactersLeft.length / 1.5)))
        // }
   

    const selectCharacter = (charName) => {
        setActive(prev => ({...prev, [charName]: true}))
        setTimeout(() => {
            setRow1(prev => prev.filter(obj => obj.name !== charName))
            setRow2(prev => prev.filter(obj => obj.name !== charName))
            setRow3(prev => prev.filter(obj => obj.name !== charName))
            setRow4(prev => prev.filter(obj => obj.name !== charName))
            console.log(row1, row2, row3, row4,)
            console.log(active)
        }, 1000)
        console.log(charactersLeft)
    }

    function rowMap(row, addIndex) {

        //the addIndex parameter is used to separate the similar indexes created across the rows//
        
        return (
            row.map((character) => (
        <div 
            className={`character-container ${active[character.name] ? "active" : ""}`}
            onClick={() => selectCharacter(character.name)}
            key={character.name}
        >
            <img className="characters" src={character.image}></img>
            <p className="character-name">{character.name}</p>
        </div>
        )))
    }

    return (
        
        <div className="main-body">          
                <div className={`image-container ${row1.length < 1 ? "empty" : ""}`}>
                    {rowMap(row1, 0)}              
                </div>                
                <div className={`image-container ${row2.length < 1 ? "empty" : ""}`}>
                    {rowMap(row2, 6)}                
                </div>  
                <div className={`image-container ${row3.length < 1 ? "empty" : ""}`}>
                    {rowMap(row3, 12)}            
                </div>
                <div className={`image-container ${row4.length < 1 ? "empty" : ""}`}>
                    {rowMap(row4, 18)}                 
                </div>
        </div>
    )
}