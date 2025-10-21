import React from "react"
import { getCharacters } from "../characters"
import { shuffleCharacters } from "../Functions/shuffleCharacters"
import { allOptions } from "../Functions/allOptions"
import { allOrNoneHave } from "../Functions/allOrNoneHave"
import { calcPrice } from "../Functions/askPrice"
import { LayoutContext } from "./Layout"
import { rearrange } from "../Functions/rearrange"

export default function MainBody() {

    const{ 
      charactersLeft, setCharactersLeft, row1, setRow1,
      row2, setRow2, row3, setRow3, row4, setRow4,
      active, setActive, culprit, setCulprit, askQuestion, sizeChanging,
      setSizeChanging, youWin, setYouWin, modalVisible, setModalVisible,
      gameStarted, setGameStarted, firstGameStarted, gameOver, setGameOver,
      shuffled, setShuffled, isVisible, setIsVisible, gameResetting,
      wallet, setCannotAfford, level, setWallet, coinsWon, heroModeOn, setHeroModeOn,
      probeCount, setProbeCount, setYouLose, heroBonus, setHeroBonus, youLose,
      setLowWalletBonus 
    } = React.useContext( LayoutContext )

    React.useEffect(() => {
      setTimeout(() => {
        setModalVisible(true)
      }, 750)
    }, [])

    const gameStartRef = React.useRef(false)

    React.useEffect(() => {
      if (firstGameStarted && gameStarted && !gameStartRef.current) {
        let shuffledChars = shuffleCharacters(getCharacters())
        setShuffled(shuffledChars)
        setCulprit(shuffledChars[Math.floor(Math.random() * 24)])
        loadCharacters()
        gameStartRef.current = true
      }
    }, [gameStarted])

    React.useEffect(() => {
      if (charactersLeft.length === 1 && !heroModeOn && youLose === false) {
        setGameOver(true)
        setYouWin(true)
        gameStartRef.current = false
        if (wallet < level) {
          setLowWalletBonus(true)
        }
      }
    }, [charactersLeft])

    React.useEffect(() => {
      if (gameOver && youWin){
        setTimeout(() => {
          setModalVisible(true)
          setWallet(wallet + coinsWon)
        }, 2750)
      }
    }, [gameOver])

    function cannotAffordAnyOption(options, wallet, charactersLeft) {
        return options.every(opt => {
          const disabled = allOrNoneHave(opt.category, opt.key, charactersLeft)
          const price = calcPrice(opt.minResults, level)
          return disabled || price > wallet
      })
    }

    React.useEffect(() => {
      setTimeout(() => {
        if (charactersLeft.length > 1 && cannotAffordAnyOption(allOptions, wallet, charactersLeft) && !youWin){
          setHeroModeOn(true)
          setCannotAfford(true)    
        }
      }, 3500)
      
    }, [wallet, charactersLeft])

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
      if(gameResetting){

        setIsVisible(false)
        console.log("game resetting: ", gameResetting)

        setTimeout (() => {
          setRow1([])
          setRow2([])
          setRow3([])
          setRow4([])
          setCharactersLeft([])
          setActive({})
          setYouWin(false)
          setGameOver(false)
          setSizeChanging(false)
          setModalVisible(false)
          setCannotAfford(false)
          setHeroBonus(false)
          setHeroModeOn(false)
          setLowWalletBonus(false)
          firstArranged.current = false
          secondArranged.current = false
          thirdArranged.current = false
          fourthArranged.current = false
          fifthArranged.current = false
          sixthArranged.current = false

          let shuffledChars = shuffleCharacters(getCharacters())
          setShuffled(shuffledChars)
          setCulprit(shuffledChars[Math.floor(Math.random() * shuffledChars.length)])
          setGameStarted(true)
        }, 500)

        setTimeout(() => {
          setIsVisible(true)
        }, 1500)
      }
    }, [gameResetting])

    React.useEffect(() => {
        console.log(row1)
        console.log(row2)
        console.log(row3)
        console.log(row4)
    }, [row1, row2, row3, row4])


    React.useEffect(() => {
      rearrange({
        charactersLeft, row1, row2, row3, row4,
        setRow1, setRow2, setRow3, setRow4,
        setSizeChanging, setIsVisible,
        refs: { secondArranged, thirdArranged, fourthArranged, fifthArranged, sixthArranged }
      })
    }, [charactersLeft])

    function getCharacterSize(len) {
      if (sizeChanging) {
        if (len > 15 && len < 25) return "char-size-1"
        if (len > 8 && len <= 15) return "char-size-2"
        if (len > 6 && len <= 8) return "char-size-3"
        if (len > 4 && len <= 6) return "char-size-4"
        if (len > 2 && len <= 4) return "char-size-5"
        if (len === 2) return "char-size-6"
        if (len === 1) return "char-size-7"
      } else {
        if (len > 15 && len < 25) return "char-size-1-post"
        if (len > 8 && len <= 15) return "char-size-2-post"
        if (len > 6 && len <= 8) return "char-size-3-post"
        if (len > 4 && len <= 6) return "char-size-4-post"
        if (len > 2 && len <= 4) return "char-size-5-post"
        if (len === 2) return "char-size-6-post"
        if (len === 1) return "char-size-7-post"
      }
        return "default"
    }

    const characterSize = getCharacterSize(charactersLeft.length)

    function getContainerSize(len) {
      if (sizeChanging) {
        if (len > 15 && len < 25) return "cont-size-1"
        if (len > 8 && len <= 15) return "cont-size-2"
        if (len > 6 && len <= 8) return "cont-size-3"
        if (len > 4 && len <= 6) return "cont-size-4"
        if (len > 2 && len <= 4) return "cont-size-5"
        if (len === 2) return "cont-size-6"
        if (len === 1) return "cont-size-7"
      } else {
        if (len > 15 && len < 25) return "cont-size-1-post"
        if (len > 8 && len <= 15) return "cont-size-2-post"
        if (len > 6 && len <= 8) return "cont-size-3-post"
        if (len > 4 && len <= 6) return "cont-size-4-post"
        if (len > 2 && len <= 4) return "cont-size-5-post"
        if (len === 2) return "cont-size-6-post"
        if (len === 1) return "cont-size-7-post"
      }
        return "default"
    }

    const containerSize = getContainerSize(charactersLeft.length)

    function probe(charName) {
      
      if (probeCount > 0) {
        if (charName != culprit.name){
          setActive(prev => ({ ...prev, [charName]: true }))
          setTimeout(() => {
              setRow1(prev => prev.filter(obj => obj.name !== charName))
              setRow2(prev => prev.filter(obj => obj.name !== charName))
              setRow3(prev => prev.filter(obj => obj.name !== charName))
              setRow4(prev => prev.filter(obj => obj.name !== charName))
          }, 2500)
          setProbeCount(probeCount - 1)
        } else {
          heroGuess(charName)
        }
      }
    }

    function shuffleArray(array) {
      return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    }

    function heroGuess(charName) {
      const isCorrect = charName === culprit.name;
      console.log("hero mode triggered")

      if (isCorrect) {
        console.log("correct triggered")
        setTimeout(() => {
          setYouWin(true);
          setHeroBonus(true);
        }, 4700)
        setTimeout(() => {
          setModalVisible(true);
          setWallet(wallet + coinsWon);
        }, 7000);
      } else {
        console.log("incorrect triggered")
        setTimeout(() => {
          setYouWin(false);
          setYouLose(true);
        }, 4700)
      
      }

      // Build the disappearance order (exclude the culprit)
      let disappearOrder = charactersLeft
        .map(c => c.name)
        .filter(name => name !== culprit.name);

      // If guess is wrong, make that guessed character the last to disappear
      if (!isCorrect) {
        disappearOrder = disappearOrder.filter(name => name !== charName);
        disappearOrder = shuffleArray(disappearOrder);
        disappearOrder.push(charName);
      } else {
        disappearOrder = shuffleArray(disappearOrder);
      }

      // Animate disappearances one by one (culprit excluded)
      disappearOrder.forEach((name, i) => {
        setTimeout(() => {
          setActive(prev => ({
            ...prev,
            [name]: true, // mark as disappearing
          }));
        }, i * (3000 / charactersLeft.length));
      });

      // After the animation finishes, remove everyone except the culprit
      setTimeout(() => {
        const keepCulprit = obj => obj.name === culprit.name;
        setRow1(prev => prev.filter(keepCulprit));
        setRow2(prev => prev.filter(keepCulprit));
        setRow3(prev => prev.filter(keepCulprit));
        setRow4(prev => prev.filter(keepCulprit));
      }, disappearOrder.length * (3000 / charactersLeft.length) + 2000);
    }

    function probeAndHero(charName){
      if(!heroModeOn){
        probe(charName)
      } else {
        heroGuess(charName)
        setHeroModeOn(false)
      }
    }

    function rowMap(row) {
        
        return (
            row.map((character) => (
            <div 
                className={`
                  character-container 
                  ${active[character.name] ? "active" : ""}
                  ${
                    askQuestion && 
                    (
                      Array.isArray(character[askQuestion[1]])
                        ? !character[askQuestion[1]].includes(askQuestion[2])        // array trait (like ["jacket","pants"])
                        : character[askQuestion[1]] != askQuestion[2]              // exact match for strings
                    )
                      ? "not-included"
                      : ""
                  }
                  ${characterSize}
                  ${modalVisible ? "grayed" : ""}
                  `}
                onClick={() => probeAndHero(character.name)}
                key={character.name}
            >
                <img className={`characters ${modalVisible ? "grayed" : ""}`} src={character.image}></img>
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
                    <div className={`image-container 
                      ${row1.length < 1 ? "empty" : ""}
                      ${firstArranged.current === true && row1.length < 1 ? "deleted" : ""} 
                      ${containerSize}`}>
                        {rowMap(row1, 0)}              
                    </div>                
                    <div className={`image-container 
                      ${row2.length < 1 ? "empty" : ""} 
                      ${secondArranged.current === true && row2.length < 1 ? "deleted" : ""}
                      ${containerSize}`}>
                        {rowMap(row2, 6)}                
                    </div>  
                    <div className={`image-container 
                      ${row3.length < 1 ? "empty" : ""}
                      ${sixthArranged.current === true && row3.length < 1 ? "deleted" : ""}
                      ${charactersLeft.length === 7 || charactersLeft.length === 8 ? "centralize" : ""} 
                      ${containerSize}`}>
                        {rowMap(row3, 12)}            
                    </div>
                    <div className={
                      `image-container 
                      ${row4.length < 1 ? "empty" : ""}
                      ${charactersLeft.length === 7 || charactersLeft.length === 8 ? "centralize" : ""}  
                      ${containerSize}`}
                      >
                        {rowMap(row4, 18)}                 
                    </div>
            </div>

    )
}