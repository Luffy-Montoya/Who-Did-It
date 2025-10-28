import React from "react"
import { getCharacters } from "../characters"
import { shuffleCharacters } from "../Functions/shuffleCharacters"
import { allOptions } from "../Functions/allOptions"
import { allOrNoneHave } from "../Functions/allOrNoneHave"
import { calcPrice } from "../Functions/askPrice"
import { LayoutContext } from "./Layout"
import { rearrange } from "../Functions/rearrange"
import { 
        probeQty, sweepQty, sweepValue, insightQty, 
        insightValue, luckyValue, luckyInc, 
        luckyRate, unluckyValue, unluckyInc, unluckyRate 
    } from "../Functions/Balance"

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
      setLowWalletBonus, setGameResetting, probeEnabled, setPhiArray, setAskQuestion,
      sweepCount, insightCount, insightEnabled, setSweepEnabled, sweepEnabled,
      setCharityEnabled, charityLevel, setPowerSelectHidden, importedChars, setImportedChars,
      charityCount, setCharityCount, charityMin
    } = React.useContext( LayoutContext )

    // Weighted random culprit picker
    function pickWeightedCulprit(chars) {
      const totalChance = chars.reduce((sum, c) => sum + c.chance, 0);
      let r = Math.random() * totalChance;
      for (const c of chars) {
        r -= c.chance;
        if (r <= 0) return c;
      }
      return chars[chars.length - 1];
    }

    // Update all characters' chance values
    function updateChances(chars, chosenId) {
      return chars.map(c => ({
        ...c,
        chance: c.id === chosenId ? 0 : c.chance + 1,
      }));
    }

    React.useEffect(() => {
      setTimeout(() => {
        setModalVisible(true)
      }, 750)
    }, [])

    React.useEffect(() => {
      console.log("Hero Bonus Activated: ", heroBonus)
    }, [heroBonus])

    const gameStartRef = React.useRef(false)

    React.useEffect(() => {
      if (firstGameStarted && gameStarted && !gameStartRef.current) {
        // Step 1: pick culprit using weights
        const chosenCulprit = pickWeightedCulprit(importedChars);
        setCulprit(chosenCulprit);

        // Step 2: update the weights
        const updatedWeights = updateChances(importedChars, chosenCulprit.id);
        setImportedChars(updatedWeights);

        // Step 3: rebuild characters fresh for display (names + shuffle)
        const freshChars = getCharacters();
        const combined = freshChars.map(fc => {
          const prev = updatedWeights.find(p => p.id === fc.id);
          return { ...fc, chance: prev ? prev.chance : 1 };
        });

        const shuffledChars = shuffleCharacters(combined);
        setShuffled(shuffledChars);
        setRow1(shuffledChars.slice(0, 6));
        setRow2(shuffledChars.slice(6, 12));
        setRow3(shuffledChars.slice(12, 18));
        setRow4(shuffledChars.slice(18));
        setCharactersLeft(shuffledChars);

        loadCharacters();
        gameStartRef.current = true;
      }
    }, [gameStarted])

    React.useEffect(() => {
      if (charactersLeft.length === 1 && !heroModeOn && youLose === false) {
        setGameOver(true)
        setYouWin(true)
        gameStartRef.current = false
        if (wallet < (coinsWon / 2) + 10) {
          setLowWalletBonus(true)
        }
      }
    }, [charactersLeft])

    React.useEffect(() => {
      if (culprit && charactersLeft.length > 0) {
        const updatedCulprit = charactersLeft.find(c => c.name === culprit.name);
        if (updatedCulprit && updatedCulprit !== culprit) {
          setCulprit(updatedCulprit);
        }
      }
    }, [charactersLeft]);

    React.useEffect(() => {
      if (insightEnabled) {
        console.log("Insight mode ON — resetting insight keys");
        setCharactersLeft(prev => prev.map(c => ({ ...c, insight: false })));
        setRow1(prev => prev.map(c => ({ ...c, insight: false })));
        setRow2(prev => prev.map(c => ({ ...c, insight: false })));
        setRow3(prev => prev.map(c => ({ ...c, insight: false })));
        setRow4(prev => prev.map(c => ({ ...c, insight: false })));
      }
    }, [insightEnabled]);

    React.useEffect(() => {
      if (sweepEnabled) {
        setTimeout(() => {
          sweep()
        }, 650)
        setSweepEnabled(false)
      }
    }, [sweepEnabled])

    React.useEffect(() => {
      if (gameOver && youWin){
        setTimeout(() => {
          setModalVisible(true)
          setWallet(prev => prev + coinsWon)
        }, 2750)
      }
    }, [gameOver])

    React.useEffect(() => {
      if (level % 4 === 0){
        setPowerSelectHidden(false)
      }
    }, [level])

    function cannotAffordAnyOption(options, wallet, charactersLeft) {
        return options.every(opt => {
          const disabled = allOrNoneHave(opt.category, opt.key, charactersLeft)
          const price = calcPrice(opt.minResults, level)
          return disabled || price > wallet
      })
    }

    React.useEffect(() => {
      setTimeout(() => {
        if (charactersLeft.length > 1 
          && cannotAffordAnyOption(allOptions, wallet, charactersLeft) 
          && !youWin
          && probeCount === 0
          && sweepCount === 0
          && insightCount ===0
        ){
          setHeroModeOn(true)
          setCannotAfford(true)    
        }
      }, 3500)
      
    }, [wallet, charactersLeft, probeCount, sweepCount, insightCount])

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
      if(!insightEnabled){
        setCharactersLeft([...row1, ...row2, ...row3, ...row4])
      }
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
          setGameResetting(false)
          firstArranged.current = false
          secondArranged.current = false
          thirdArranged.current = false
          fourthArranged.current = false
          fifthArranged.current = false
          sixthArranged.current = false

          const chosenByWeight = pickWeightedCulprit(importedChars);

          // 2️⃣ Update weights for everyone
          const updatedWeights = updateChances(importedChars, chosenByWeight.id);
          setImportedChars(updatedWeights);

          // 3️⃣ Get new randomized characters (new names)
          const freshChars = getCharacters();

          // 4️⃣ Merge weight data into those fresh characters
          const combined = freshChars.map(fc => {
            const prev = updatedWeights.find(p => p.id === fc.id);
            return { ...fc, chance: prev ? prev.chance : 1 };
          });

          // 5️⃣ Find the new version of the culprit (same id, new name)
          const syncedCulprit = combined.find(c => c.id === chosenByWeight.id);
          setCulprit(syncedCulprit);

          // 6️⃣ Shuffle and display
          const shuffledChars = shuffleCharacters(combined);
          setShuffled(shuffledChars);
          setRow1(shuffledChars.slice(0, 6));
          setRow2(shuffledChars.slice(6, 12));
          setRow3(shuffledChars.slice(12, 18));
          setRow4(shuffledChars.slice(18));
          setCharactersLeft(shuffledChars);
          setGameStarted(true);
          console.log("Culprit:", syncedCulprit.name);
          console.log("Chances:", combined.map(c => `${c.name}:${c.chance}`).join(", "));
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

    React.useEffect(() => {
      charityRoll()
    }, [charityCount])

    function charityRoll() {
      if (charityCount === charityMin[charityLevel]) {
        if (Math.random() < 1/3) {
          setCharityEnabled(true)
          setCharityCount(0)
        } 
      } else if (charityCount === charityMin[charityLevel] + 1) {
        if (Math.random() < 0.5) {
          setCharityEnabled(true)
          setCharityCount(0)
        }
      } else if (charityCount === charityMin[charityLevel] + 2) {
        setCharityEnabled(true)
        setCharityCount(0)
      }
    }

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
        setHeroBonus(true);
        setTimeout(() => {
          setYouWin(true);
          setGameOver(true)
        }, 4700)
        setTimeout(() => {
          setModalVisible(true);
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

    function probeInsightHero(charName) {
      if(probeEnabled){
        setPhiArray(charName)
        setAskQuestion([{}, "name", charName.name, 0])

      } else if (insightEnabled) {
        setPhiArray(prev => {
          if (prev.includes(charName.name)) {
            return prev.filter(n => n !== charName.name);
          } else {
            return [...prev, charName.name];
          }
        });

        setCharactersLeft(prev =>
          prev.map(c =>
            c.name === charName.name ? { ...c, insight: !c.insight } : c
          )
        );

        const updateInsight = (row) =>
          row.map(c =>
            c.name === charName.name ? { ...c, insight: !c.insight } : c
          );

        setRow1(prev => updateInsight(prev));
        setRow2(prev => updateInsight(prev));
        setRow3(prev => updateInsight(prev));
        setRow4(prev => updateInsight(prev));

        setAskQuestion([{},"insight", true, 0]);

      } else if (heroModeOn) {
        heroGuess(charName.name);
        console.log(charName);
      }
    }

    function sweep() {
      // Exclude the culprit from elimination
      const safeCharacters = charactersLeft.filter(c => c.name !== culprit.name);

      // Calculate 45% of remaining (rounded)
      const sweepCount = Math.floor((safeCharacters.length + 1) * (sweepValue / 100));

      // Randomly shuffle and pick unlucky ones
      const shuffled = safeCharacters.sort(() => Math.random() - 0.5);
      const toRemove = shuffled.slice(0, sweepCount).map(c => c.name);

      // Random stagger duration (based on heroGuess pacing)
      const totalTime = Math.floor(charactersLeft.length / 2) * 250; // total animation window
      const delayPerChar = totalTime / toRemove.length;

      // Animate removals one by one
      toRemove.forEach((name, i) => {
        setTimeout(() => {
          setActive(prev => ({ ...prev, [name]: true })); // trigger "rise/fade" animation
        }, i * 250);
      });

      // Remove them after animations finish
      setTimeout(() => {
        const keep = (obj) => !toRemove.includes(obj.name);
        setRow1(prev => prev.filter(keep));
        setRow2(prev => prev.filter(keep));
        setRow3(prev => prev.filter(keep));
        setRow4(prev => prev.filter(keep));
      }, totalTime + 2000); // 2s buffer for fade-out to complete
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
          onClick={() => probeInsightHero(character)}
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