import React from "react"
import { characters } from "../characters"
import { shuffleCharacters } from "../Functions/shuffleCharacters"

export default function MainBody() {

    const [shuffled, setShuffled] = React.useState([])

    React.useEffect(() => {
        setShuffled(shuffleCharacters(characters))
    }, [])
    
    const characterMap = shuffled.map((character, index) => (
        <img src={character.image} key={index}></img>
    ))

    return (
        <div className="MainBody">
            {characterMap}
        </div>
    )
}