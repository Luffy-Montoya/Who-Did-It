import React from "react"
import { LayoutContext } from "./Layout"
import { coin } from "../images64"
import { 
        luckyValue, luckyInc, luckyRate, 
        unluckyValue, unluckyInc, unluckyRate 
    } from "../Functions/Balance"


export default function AskDisplay() {

    const { 
        askQuestion, setPrice, charactersLeft, 
        setRow1, setRow2, setRow3, setRow4, setActive, setAskQuestion,
        setAskDisplay, setCategoryDisplay, setWallet, culprit, 
        setSizeChanging, setAskOption, toAsk,
        setToAsk, setToCategories, setQuestionAsked, toCategories,
        setOptionsBar, fade, setFade, yesOrNo, setYesOrNo, modalVisible,
        setYesCount, setNoCount, yesCount, noCount, probeEnabled, setProbeEnabled, insightEnabled,
        heroModeOn, probeCount, setProbeCount, setModalVisible, phiArray,
        setHeroBonus, probeActivated, setProbeActivated, heroModeActivated, 
        setHeroModeActivated, setInsightEnabled, luckyLevel, unluckyLevel, setCharityEnabled,
        setInsightCount, level, charityEnabled, setCharityCount, charityLevel,
        setLuckExecuting, charityTemp, setCharityTemp 
    } = React.useContext(LayoutContext)

    const parameters = [askQuestion[1], askQuestion[2], askQuestion[3]]

    function selectCharacter(category, key, price) {

        const filtered = charactersLeft.filter(character => {
        const value = character[category]

        if (Array.isArray(value)) {
            return value.includes(key)
        }
        return value === key
        })

        setToAsk(false)
        setOptionsBar("")
        setTimeout(() => {
            setAskDisplay(false)
            setCategoryDisplay(true)
        }, 2300)
        setTimeout(() => {
            setToCategories(true)
        }, 2400)
        setQuestionAsked(true)
        setPrice(price)
        setAskQuestion("")
        setAskOption("")
        setWallet(prev => prev - price)
        setTimeout(() => {
            setSizeChanging(true)
        }, 500)
        setTimeout(() => {
            setSizeChanging(false)
        }, 4500)
        
        if (Array.isArray(culprit[category]) ? !culprit[category].includes(key) : culprit[category] !== key){
            
            setYesOrNo("No!")

            if (!probeEnabled && !insightEnabled){
                setNoCount(prev => prev + 1)
            }
            if (unluckyLevel > 0  && !probeEnabled && !insightEnabled){
                setLuckExecuting(true)
                setTimeout(() => {
                    setWallet(prev => prev + (unluckyLevel * unluckyValue))
                    setLuckExecuting(false)
                }, 1000)
            }
            const namesToActivate = filtered.map(character => character.name)
            const newActiveState = namesToActivate.reduce((acc, name) => {
            acc[name] = true
            return acc
            }, {})

            setActive(prev => ({ ...prev, ...newActiveState }))
            
            setTimeout(() => {
                setRow1(prev => prev.filter(obj => {
                    const value = obj[category]
                    return Array.isArray(value) ? !value.includes(key) : value !== key
                }))
                setRow2(prev => prev.filter(obj => {
                    const value = obj[category]
                    return Array.isArray(value) ? !value.includes(key) : value !== key
                }))
                setRow3(prev => prev.filter(obj => {
                    const value = obj[category]
                    return Array.isArray(value) ? !value.includes(key) : value !== key
                }))
                setRow4(prev => prev.filter(obj => {
                    const value = obj[category]
                    return Array.isArray(value) ? !value.includes(key) : value !== key
                }))
                }, 2500)

        } else {
            setYesOrNo("Yes!")
            setLuckExecuting(true)
            if (!probeEnabled && !insightEnabled){
                setYesCount(prev => prev + 1)
            }
            if (luckyLevel > 0 && !probeEnabled && !insightEnabled) {  
                setLuckExecuting(true)            
                setTimeout(() => {
                    setWallet(prev => prev + (luckyLevel * luckyValue))
                    setLuckExecuting(false)
                }, 1000)
            }
            const namesToActivate = charactersLeft
            .filter(character => {
            const value = character[category]
            return Array.isArray(value) ? !value.includes(key) : value !== key
            })
            .map(character => character.name)

            const newActiveState = Object.fromEntries(
                namesToActivate.map(name => [name, true])
            )

            setActive(prev => ({ ...prev, ...newActiveState }))
            
            setTimeout(() => {
                setRow1(prev => prev.filter(obj => {
                    const value = obj[category]
                    return Array.isArray(value) ? value.includes(key) : value === key
                }))
                setRow2(prev => prev.filter(obj => {
                    const value = obj[category]
                    return Array.isArray(value) ? value.includes(key) : value === key
                }))
                setRow3(prev => prev.filter(obj => {
                    const value = obj[category]
                    return Array.isArray(value) ? value.includes(key) : value === key
                }))
                setRow4(prev => prev.filter(obj => {
                    const value = obj[category]
                    return Array.isArray(value) ? value.includes(key) : value === key
                }))
                }, 2500)
            console.log(key)
        }
    }

    function showCategories(){
        setFade(true)
        setToAsk(false)
        setTimeout(() => {
            setAskDisplay(false)
            setCategoryDisplay(true)
            setAskQuestion([])
        }, 250)
        setAskOption("")
        setTimeout(() => {
            setToCategories(true)
        }, 300)
        setOptionsBar("")
        setTimeout(() => {
            if (probeEnabled || insightEnabled) {
            setProbeEnabled(false)
            setInsightEnabled(false)
            }
        },350)
    }

    function ask() {
        console.log("Asked");
        if (charityLevel > 0 && !charityEnabled) {
            setCharityCount(prev => prev + 1)
        }
    
        if (charityEnabled) {
            setCharityEnabled(false)
            if (charityTemp) {
                setCharityCount(prev => Math.ceil(prev / 2))
                setCharityTemp(false)
            } else {
            setCharityCount(1)
            }
        }

        if (probeEnabled) {
            selectCharacter("name", askQuestion[2], 0);
            setProbeCount(prev => prev - 1);
            setProbeEnabled(false);
            setInsightEnabled(false);
        } else if (insightEnabled) {
            selectCharacter(...parameters);
            setInsightCount(prev => prev - 1);
            setProbeEnabled(false);
            setInsightEnabled(false);
        } else {
            selectCharacter(...parameters);
        }
        }

    return(
        <div className="ask-display">
            <button className={`go-back ${!toAsk ? "offscreen" : ""}`} onClick={() => showCategories()}>Back</button>
            <div className={`ask-text-container ${!toAsk ? "offscreen" : ""}`}>
                <div className={`question ${fade ? "fade" : !toAsk ?  "offscreen" : ""}`}>
                    {probeEnabled && askQuestion[1] === "name"
                        ? `"Was it ${askQuestion[2]}?"`
                        : probeEnabled
                        ? "Choose a Suspect"
                        : insightEnabled
                            ? `"Was it any of these ${phiArray.length} people?"`
                                : askQuestion[0]}
                </div>
                <div className={`answer ${fade ? "fade" : !toAsk ?  "" : "offscreen"}`}>{yesOrNo}</div>
            </div>
            <button className={`ask-button ${!toAsk ? "offscreen" : ""}`} onClick={() => ask()}>
                <div>Ask!</div>
                <div className="ask-button-price">
                    {!probeEnabled && !insightEnabled ?
                    <>
                    <img className={`ask-coin ${modalVisible ? "grayed" : ""}`} src={coin}></img>
                    {askQuestion[3]}
                    </> 
                    : <div className="ask-ghost"></div>}
                </div>
            </button>
        </div>
    )
}