import React from "react"
import { characters } from "../characters"
import { shuffleCharacters } from "../Functions/shuffleCharacters"

export default function MainBody() {

    const [shuffled, setShuffled] = React.useState([])
    const [charactersLeft, setCharactersLeft] = React.useState([])
    const [charCount, setCharCount] = React.useState(24)
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
    const thirdArranged = React.useRef(false)
    const fourthArranged = React.useRef(false)
    const fifthArranged = React.useRef(false)
    const sixthArranged = React.useRef(false)

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
        setCharactersLeft([...row1, ...row2, ...row3, ...row4])
    }, [row1, row2, row3, row4])


    React.useEffect(() => {
        if (!secondArranged.current && charactersLeft.length < 16 && charactersLeft.length > 9) {
            setTimeout(() => {
                setRow1(charactersLeft.slice(0, 5))
                setRow2(charactersLeft.slice(5, 10))
                setRow3(charactersLeft.slice(10))
                setRow4([])
                secondArranged.current = true
            },1100)
        }

        if (!thirdArranged.current && charactersLeft.length < 9 && charactersLeft.length > 6) {
            setTimeout(() => {
                setRow1(charactersLeft.slice(0, 4))
                setRow2(charactersLeft.slice(4))
                setRow3([])
                setRow4([])
                thirdArranged.current = true
            },1100)
        }

        if (!fourthArranged.current && charactersLeft.length < 7 && charactersLeft.length > 4) {
            setTimeout(() => {
                setRow1(charactersLeft.slice(0, 3))
                setRow2(charactersLeft.slice(3))
                setRow3([])
                setRow4([])
                fourthArranged.current = true
            },1100)
        }

        if (!fifthArranged.current && charactersLeft.length < 5 && charactersLeft.length > 2) {
            setTimeout(() => {
                setRow1(charactersLeft.slice(0, 2))
                setRow2(charactersLeft.slice(2))
                setRow3([])
                setRow4([])
                fifthArranged.current = true
            },1100)
        }

        if (!sixthArranged.current && charactersLeft.length < 3 && charactersLeft.length > 1) {
            setTimeout(() => {
                setRow1(charactersLeft.slice(0, 3))
                setRow2(charactersLeft.slice(3))
                setRow3([])
                setRow4([])
                sixthArranged.current = true
            },1100)
        }

    }, [charactersLeft])
   
    const selectCharacter = (charName) => {
        setActive(prev => ({...prev, [charName]: true}))
        setCharCount(charCount - 1)

        setTimeout(() => {
            setRow1(prev => prev.filter(obj => obj.name !== charName))
            setRow2(prev => prev.filter(obj => obj.name !== charName))
            setRow3(prev => prev.filter(obj => obj.name !== charName))
            setRow4(prev => prev.filter(obj => obj.name !== charName))
            
        }, 1000)
    }

    function getCharacterSize(len) {
        if (len > 15 && len < 25) return "char-size-1"
        if (len > 9 && len <= 15) return "char-size-2"
        if (len > 5 && len <= 9) return "char-size-3"
        if (len > 2 && len <= 5) return "char-size-4"
        if (len === 2) return "char-size-5"
        if (len === 1) return "char-size-6"
        return "default"
    }

    const characterSize = getCharacterSize(charactersLeft.length)

    function getContainerSize(len) {
        if (len > 15 && len < 25) return "cont-size-1"
        if (len > 9 && len <= 15) return "cont-size-2"
        if (len > 5 && len <= 9) return "cont-size-3"
        if (len > 2 && len <= 5) return "cont-size-4"
        if (len === 2) return "cont-size-5"
        if (len === 1) return "cont-size-6"
        return "default"
    }

    const containerSize = getContainerSize(charactersLeft.length)

    function rowMap(row) {
        
        return (
            row.map((character) => (
        <div 
            className={`character-container ${active[character.name] ? "active" : ""} ${characterSize}`}
            onClick={() => selectCharacter(character.name)}
            key={character.name}
        >
            <img className="characters" src={character.image}></img>
            <p className="character-name">{character.name}</p>
        </div>
        )))
    }

    return (
        <>
        <div className="main-body">          
                <div className={`image-container ${row1.length < 1 ? "empty" : ""} ${containerSize}`}>
                    {rowMap(row1, 0)}              
                </div>                
                <div className={`image-container ${row2.length < 1 ? "empty" : ""} ${containerSize}`}>
                    {rowMap(row2, 6)}                
                </div>  
                <div className={`image-container ${row3.length < 1 ? "empty" : ""} ${containerSize}`}>
                    {rowMap(row3, 12)}            
                </div>
                <div className={`image-container ${row4.length < 1 ? "empty" : ""} ${containerSize}`}>
                    {rowMap(row4, 18)}                 
                </div>
        </div>
        <button onClick = {() => console.log(charactersLeft)}>Left</button>
        <button onClick = {() => console.log(row1.concat(row2, row3, row4))}>Concat</button>
        </>
    )
}