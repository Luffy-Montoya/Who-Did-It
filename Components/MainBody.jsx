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
    }, [])

    const firstArranged = React.useRef(false)
    const secondArranged = React.useRef(false)

    React.useEffect(() => {
    if (!firstArranged.current && shuffled.length > 15) {
        setRow1(shuffled.slice(0, 6))
        setRow2(shuffled.slice(6, 12))
        setRow3(shuffled.slice(12, 18))
        setRow4(shuffled.slice(18))
        firstArranged.current = true
    }
    }, [shuffled])

    React.useEffect(() => {
    if (!secondArranged.current && charactersLeft.length < 17 && charactersLeft.length > 9) {
        setRow1(charactersLeft.slice(0, Math.floor(charactersLeft.length / 3)))
        setRow2(charactersLeft.slice(Math.floor(charactersLeft.length / 3), Math.floor(charactersLeft.length / 1.5)))
        setRow3(charactersLeft.slice(Math.floor(charactersLeft.length / 1.5)))
        setRow4([])
        secondArranged.current = true
    }

    setCharactersLeft(row1.concat(row2, row3, row4))
    console.log(charactersLeft)

    }, [row1, row2, row3, row4])
   
    const selectCharacter = (charName) => {
        setActive(prev => ({...prev, [charName]: true}))
        setTimeout(() => {
            setRow1(prev => prev.filter(obj => obj.name !== charName))
            setRow2(prev => prev.filter(obj => obj.name !== charName))
            setRow3(prev => prev.filter(obj => obj.name !== charName))
            setRow4(prev => prev.filter(obj => obj.name !== charName))
        }, 1000)
    }

    function rowMap(row) {
        
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