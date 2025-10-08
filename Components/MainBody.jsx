import React from "react"
import { characters } from "../characters"
import { shuffleCharacters } from "../Functions/shuffleCharacters"
import { LayoutContext } from "./Layout"

export default function MainBody() {

    const [shuffled, setShuffled] = React.useState([])
    const [isVisible, setIsVisible ] = React.useState(false)

    const{ charactersLeft,
            setCharactersLeft,
            row1,
            setRow1,
            row2,
            setRow2,
            row3,
            setRow3,
            row4,
            setRow4,
            active,
            setActive 
        } = React.useContext( LayoutContext )

    React.useEffect(() => {
        const shuffledChars = shuffleCharacters(characters)
        setShuffled(shuffledChars)
        loadCharacters()
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
        console.log(row1)
        console.log(row2)
        console.log(row3)
        console.log(row4)
    }, [row1, row2, row3, row4])


    React.useEffect(() => {
      const len = charactersLeft.length;

      // Helper to check if a rearrangement is already in the desired shape
      const rowsMatch = (...lengths) => {
        const actual = [row1.length, row2.length, row3.length, row4.length].filter(l => l > 0);
        const target = lengths.filter(l => l > 0);
        return JSON.stringify(actual) === JSON.stringify(target);
      };

      // === 15 layout === (5 / 5 / 5)
      if (!secondArranged.current && len < 16 && len >= 9) {
        if (
            rowsMatch(5, 5, 5) || 
            rowsMatch(4, 5, 5) || 
            rowsMatch(5, 4, 5) || 
            rowsMatch(5, 5, 4) || 
            rowsMatch(4, 4, 5) ||
            rowsMatch(4, 5, 4) ||
            rowsMatch(5, 4, 4) ||
            rowsMatch(4, 4, 4) ||
            rowsMatch(3, 4, 4) ||
            rowsMatch(4, 3, 4) ||
            rowsMatch(4, 4, 3) ||
            rowsMatch(3, 3, 4) ||
            rowsMatch(3, 4, 3) ||
            rowsMatch(4, 3, 3) ||
            rowsMatch(3, 3, 3)   
    ) {
          console.log("15 skipped — already aligned");
          secondArranged.current = true;
        } else {
          setTimeout(() => {
            setIsVisible(false);
          }, 200)
          setTimeout(() => {
            setRow1(charactersLeft.slice(0, (Math.ceil(charactersLeft.length * 1/3))));
            setRow2(charactersLeft.slice((Math.ceil(charactersLeft.length * 1/3)), (Math.ceil(charactersLeft.length * 2/3))));
            setRow3(charactersLeft.slice((Math.ceil(charactersLeft.length * 2/3))));
            setRow4([]);
            setIsVisible(true);
            secondArranged.current = true;
            console.log("rows for 15 set");
          }, 1200);
        }
      }

      // === 8 layout === (4 / 4)
      if (!thirdArranged.current && len < 9 && len >= 7) {
        if (
            rowsMatch(4, 4) ||
            rowsMatch(3, 4) ||
            rowsMatch(4, 3)
        ) {
          console.log("8 skipped — already aligned");
          thirdArranged.current = true;
        } else {
          setTimeout(() => {
            setIsVisible(false);
          }, 200)
          setTimeout(() => {
            setRow1(charactersLeft.slice(0, 4));
            setRow2(charactersLeft.slice(4));
            setRow3([]);
            setRow4([]);
            setIsVisible(true);
            thirdArranged.current = true;
            console.log("rows for 8 set");
          }, 1200);
        }
      }

      // === 6 layout === (3 / 3)
      if (!fourthArranged.current && len < 7 && len >= 5) {
        if (
            rowsMatch(3, 3) ||
            rowsMatch(2, 3) ||
            rowsMatch(3, 2)
        ) {
          console.log("6 skipped — already aligned");
          fourthArranged.current = true;
        } else {
          setTimeout(() => {
            setIsVisible(false);
          }, 200)
          setTimeout(() => {
            setRow1(charactersLeft.slice(0, 3));
            setRow2(charactersLeft.slice(3));
            setRow3([]);
            setRow4([]);
            setIsVisible(true);
            fourthArranged.current = true;
            console.log("rows for 6 set");
          }, 1200);
        }
      }

      // === 4 layout === (2 / 2)
      if (!fifthArranged.current && len < 5 && len >= 3) {
        if (rowsMatch(2, 2) ||
            rowsMatch(1, 2) ||
            rowsMatch(2, 1)
    ) {
          console.log("4 skipped — already aligned");
          fifthArranged.current = true;
        } else {
          setTimeout(() => {
            setIsVisible(false);
          }, 200)
          setTimeout(() => {
            setRow1(charactersLeft.slice(0, 2));
            setRow2(charactersLeft.slice(2));
            setRow3([]);
            setRow4([]);
            setIsVisible(true);
            fifthArranged.current = true;
            console.log("rows for 4 set");
          }, 1200);
        }
      }

      // === 2 layout === (2)
      if (!sixthArranged.current && len < 3 && len >= 1) {
        if (rowsMatch(2)) {
          console.log("2 skipped — already aligned");
          sixthArranged.current = true;
        } else {
          setTimeout(() => {
            setIsVisible(false);
          }, 200)
          setTimeout(() => {
            setRow1(charactersLeft.slice(0));
            setRow2([]);
            setRow3([]);
            setRow4([]);
            setIsVisible(true);
            sixthArranged.current = true;
            console.log("rows for 2 set");
          }, 1200);
        }
      }
    }, [charactersLeft]);

    function getCharacterSize(len) {
        if (len > 15 && len < 25) return "char-size-1"
        if (len > 8 && len <= 15) return "char-size-2"
        if (len > 6 && len <= 8) return "char-size-3"
        if (len > 4 && len <= 6) return "char-size-4"
        if (len > 2 && len <= 4) return "char-size-5"
        if (len === 2) return "char-size-6"
        if (len === 1) return "char-size-7"
        return "default"
    }

    const characterSize = getCharacterSize(charactersLeft.length)

    function getContainerSize(len) {
        if (len > 15 && len < 25) return "cont-size-1"
        if (len > 8 && len <= 15) return "cont-size-2"
        if (len > 6 && len <= 8) return "cont-size-3"
        if (len > 4 && len <= 6) return "cont-size-4"
        if (len > 2 && len <= 4) return "cont-size-5"
        if (len === 2) return "cont-size-6"
        if (len === 1) return "cont-size-7"
        return "default"
    }

    const containerSize = getContainerSize(charactersLeft.length)

    function getFontSize(len) {
        if (len > 15 && len < 25) return "font-size-1"
        if (len > 8 && len <= 15) return "font-size-2"
        if (len > 6 && len <= 8) return "font-size-3"
        if (len > 4 && len <= 6) return "font-size-4"
        if (len > 2 && len <= 4) return "font-size-5"
        if (len === 2) return "font-size-6"
        if (len === 1) return "font-size-7"
        return "default"
    }

    const fontSize = getFontSize(charactersLeft.length)

    function removeCharacter(charName) {

    setActive(prev => ({ ...prev, [charName]: true }))
      setTimeout(() => {
          setRow1(prev => prev.filter(obj => obj.name !== charName))
          setRow2(prev => prev.filter(obj => obj.name !== charName))
          setRow3(prev => prev.filter(obj => obj.name !== charName))
          setRow4(prev => prev.filter(obj => obj.name !== charName))
      }, 2000)
    }


    function rowMap(row) {
        
        return (
            row.map((character) => (
            <div 
                className={`character-container ${active[character.name] ? "active" : ""} ${characterSize}`}
                onClick={() => removeCharacter(character.name)}
                key={character.name}
            >
                <img className="characters" src={character.image}></img>
                <p className="character-name">{character.name}</p>
            </div>
        )))
    }

    function loadCharacters(){
        if (!isVisible) {
            setIsVisible(true)
        }
    }

    return (

            <div className={`main-body ${isVisible ? "visible" : "invisible"}`}>          
                    <div className={`image-container ${row1.length < 1 ? "empty" : ""} ${containerSize}`}>
                        {rowMap(row1, 0)}              
                    </div>                
                    <div className={`image-container 
                      ${row2.length < 1 ? "empty" : ""} 
                      ${sixthArranged.current === true && row2.length < 1 ? "deleted" : ""}
                      ${containerSize}`}>
                        {rowMap(row2, 6)}                
                    </div>  
                    <div className={`image-container 
                      ${row3.length < 1 ? "empty" : ""}
                      ${secondArranged.current === true && row3.length < 1 ? "deleted" : ""} 
                      ${containerSize}`}>
                        {rowMap(row3, 12)}            
                    </div>
                    <div className={
                      `image-container 
                      ${row4.length < 1 ? "empty" : ""} 
                      ${firstArranged.current === true && row4.length < 1 ? "deleted" : ""}
                      ${containerSize}`}
                      >
                        {rowMap(row4, 18)}                 
                    </div>
            </div>

    )
}