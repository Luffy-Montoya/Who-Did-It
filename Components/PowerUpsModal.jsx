import React from "react"
import { LayoutContext } from "./Layout"
import { 
        probeQty, sweepQty, sweepValue, insightQty, 
        insightValue, luckyValue, luckyInc, charityMin, 
        luckyRate, unluckyValue, unluckyInc, unluckyRate,
        probeMin, sweepMin, insightMin 
    } from "../Functions/Balance"

export default function PowerUpsModal(){

    const { 
        powerSelectHidden, setPowerSelectHidden, probeCount, setProbeCount,
            sweepCount, setSweepCount, insightCount, setInsightCount, charityLevel, setCharityLevel,
            luckyLevel, setLuckyLevel, unluckyLevel, setUnluckyLevel, confirmPower, setConfirmPower,
            selectDisabled, setSelectDisabled, level, setCharityEnabled, setProbeLevel, setSweepLevel,
            setInsightLevel, setProbeTracker, setSweepTracker, setInsightTracker, probeLevel,
            sweepLevel, insightLevel
    } = React.useContext(LayoutContext)

    const roman = [
        "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
        "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
        "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX",
        "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX", "XL",
        "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX", "L"
    ]

    function addProbe() {
        setConfirmPower(`Add Probe ${roman[probeLevel]}`)
    }

     function addSweep() {
        setConfirmPower(`Add Sweep ${roman[sweepLevel]}`)
    }

     function addInsight() {
        setConfirmPower(`Add Insight ${roman[insightLevel]}`)
    }

     function addCharity() {
        setConfirmPower(`Add Charity ${roman[charityLevel]}`)
    }

     function addLucky() {
        setConfirmPower(`Add Lucky ${roman[luckyLevel]}`)
    }

     function addUnlucky() {
        setConfirmPower(`Add Unlucky ${roman[unluckyLevel]}`)
    }

    function addPower() {
        if (confirmPower != "Select Power") {
            setPowerSelectHidden(true)
            if (confirmPower === `Add Probe ${roman[probeLevel]}`) {
                setTimeout(() => {
                    setProbeCount(prev => prev + probeQty)
                    setProbeLevel(prev => prev + 1)
                }, 500)      
            } else if (confirmPower === `Add Sweep ${roman[sweepLevel]}`) {
                setTimeout(() => {
                    setSweepCount(prev => prev + sweepQty)
                    setSweepLevel(prev => prev + 1) 
                }, 500)          
            } else if (confirmPower === `Add Insight ${roman[insightLevel]}`) {
                setTimeout(() => {
                    setInsightCount(prev => prev + insightQty)
                    setInsightLevel(prev => prev + 1)
                }, 500)
            } else if (confirmPower === `Add Charity ${roman[charityLevel]}`) {
                setTimeout(() => {
                    setCharityLevel(prev => prev + 1)
                    setCharityEnabled(true)
                }, 500)
            } else if (confirmPower === `Add Lucky ${roman[luckyLevel]}`) {
                setTimeout(() => {
                    setLuckyLevel(prev => prev + 1)
                }, 500)
            } else if (confirmPower === `Add Unlucky ${roman[unluckyLevel]}`) {
                setTimeout(() => {
                    setUnluckyLevel(prev => prev + 1)
                }, 500)
            }
            setSelectDisabled(true)
            setTimeout(() => {
                setSelectDisabled(false)
                setConfirmPower("Select Power")
            }, 1000)
        }
    }

    const sweepNA = level < 12
    const insightNA = level < 20
    const charityNA = level < 16
    const luckyNA = level < 8
    const unluckyNA = level < 8

    const probeUPNA = level < (probeLevel * 12) + 4 || probeLevel === 4
    const sweepUPNA = level < (sweepLevel * 12) + 12 || sweepLevel === 4
    const insightUPNA = level < (insightLevel * 12) + 20 || insightLevel === 4
    const charityUPNA = level < (charityLevel * 16) + 16 || charityLevel === 4
    const luckyUPNA = level < (luckyLevel * 16) + 8
    const unluckyUPNA = level < (unluckyLevel * 16) + 8


    return (
        <div className={`power-ups-modal ${powerSelectHidden ? "power-select-hidden" : ""}`}>
            <div className="power-ups-title">Choose a Power</div>
            <div className="power-ups-container active-powers">
                <div className={`user-power ${probeUPNA ? "upgrade-NA" : ""}`}>
                    <button 
                        className={`
                            power-button probe-button
                            ${confirmPower === `Add Probe ${roman[probeLevel]}` ? "glow" : ""}
                            `} 
                        onClick={() => addProbe()}
                        disabled={probeUPNA}
                    >
                        <img 
                            className={`
                                power-logo probe-logo
                                ${confirmPower === `Add Probe ${roman[probeLevel]}` ? "glow" : ""}
                                `} 
                            src="images/probe.png" alt="probe"
                        />
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name probe-name">
                            <div>{`Probe ${probeLevel === 4 ? roman[probeLevel - 1] : roman[probeLevel]} - x${probeQty}`}</div>
                            <div>{`Qty: ${probeCount} / ${probeMin[probeLevel]}-${probeLevel > 0 ? probeMin[probeLevel] + 1 : "0"}`}</div>
                        </div>
                        <div className="power-select-desc">
                            {probeLevel === 4
                                ? "Maxed."
                                : probeUPNA
                                ? `Available on Level ${(probeLevel * 12) + 4}`
                                : "Select a single suspect to reveal if they are the culprit."
                            }
                            
                            {!probeUPNA && <div>{`Regain 1 Probe per ${probeMin[probeLevel + 1]}-${probeMin[probeLevel + 1] + 1} levels`}.</div>}                            
                        </div>
                    </div>
                </div>
                <div className={`user-power ${sweepNA ? "not-available" : ""} ${sweepUPNA ? "upgrade-NA" : ""}`}>
                    <button className={`
                            power-button sweep-button
                            ${confirmPower === `Add Sweep ${roman[sweepLevel]}` ? "glow" : ""}
                            `} 
                        onClick={() => addSweep()}
                        disabled={sweepNA || sweepUPNA}
                    >
                        <img 
                            className={`
                                power-logo sweep-logo
                                ${confirmPower === `Add Sweep ${roman[sweepLevel]}` ? "glow" : ""}
                                `} 
                            src="images/broom.png" alt="sweep"
                        />
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name sweep-name">
                            <div>{`Sweep ${sweepLevel === 4 ? roman[sweepLevel - 1] : roman[sweepLevel]} - x${sweepQty}`}</div>
                            <div>{`Qty: ${sweepCount} / ${sweepMin[sweepLevel]}-${sweepLevel > 0 ? sweepMin[sweepLevel] + 1 : "0"}`}</div>
                        </div>
                        <div className="power-select-desc">
                            {sweepLevel === 4
                                ? "Maxed."
                                : sweepNA
                                ? "Available on Level 12."
                                : sweepUPNA
                                ? `Available on Level ${(sweepLevel * 12) + 12}`
                                : `Instantly eliminate ~${sweepValue}% of the innocent suspects at random.`}
                            {(!sweepNA && !sweepUPNA) && <div>{`Regain 1 Sweep per ${sweepMin[sweepLevel + 1]}-${sweepMin[sweepLevel + 1] + 1} levels`}</div>}
                        </div>
                    </div>
                </div>
                <div className={`user-power ${insightNA ? "not-available" : ""} ${insightUPNA ? "upgrade-NA" : ""}`}>
                    <button className={`
                            power-button insight-button
                            ${confirmPower === `Add Insight ${roman[insightLevel]}` ? "glow" : ""}
                            `} 
                        onClick={() => addInsight()}
                        disabled={insightNA || insightUPNA}
                    >
                        <img 
                            className={`
                                power-logo insight-logo
                                ${confirmPower === `Add Insight ${roman[insightLevel]}` ? "glow" : ""}
                                `}  
                            src="images/insight.png" alt="insight"
                        />
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name">
                            <div>{`Insight ${insightLevel === 4 ? roman[insightLevel - 1] : roman[insightLevel]} - x${insightQty}`}</div>
                            <div>{`Qty: ${insightCount} / ${insightMin[insightLevel]}-${insightLevel > 0 ? insightMin[insightLevel] + 1 : "0"}`}</div>
                        </div>
                        <div className="power-select-desc">
                            {insightLevel === 4
                                ? "Maxed."
                                : insightNA
                                ? "Available on Level 20."
                                : insightUPNA
                                ? `Available on Level ${(insightLevel * 12) + 20}`
                                : "Select any number of suspects and reveal if the culprit is in that group."}
                            {(!insightNA && !insightUPNA) && <div>{`Regain 1 Insight per ${insightMin[insightLevel + 1]}-${insightMin[insightLevel + 1] + 1} levels`}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="power-ups-container passive-powers">
                <div className={`user-power ${charityNA ? "not-available" : ""} ${charityUPNA ? "upgrade-NA" : ""}`}>
                    <button className={`
                            power-button charity-button
                            ${confirmPower === `Add Charity ${roman[charityLevel]}` ? "glow" : ""}
                            `} 
                        onClick={() => addCharity()}
                        disabled={charityNA || charityUPNA}
                    >
                        <img 
                            className={`
                                power-logo charity-logo
                                ${confirmPower === `Add Charity ${roman[charityLevel]}` ? "glow" : ""}
                                `}  
                                src="images/gift.png" alt="charity"
                        />
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name charity-name">
                            <div>{`Charity ${charityLevel < 4 ? roman[charityLevel] : roman[3]}`}</div>
                            <div>{`Current: ${charityMin[charityLevel]}-${charityLevel > 0 ? charityMin[charityLevel] + 2 : 0}`}</div> 
                        </div>
                        <div className="power-select-desc">
                            {charityLevel === 4
                                ? "Maxed."
                                : charityNA
                                ? "Available on level 16."
                                : charityUPNA
                                ? `Available on Level ${(charityLevel + 1) * 16}`
                                : `Immediately get a free question and another every ${charityMin[charityLevel + 1]}-${charityMin[charityLevel + 1] + 2} questions.` 
                                
                            }  
                        </div>
                    </div>
                </div>
                <div className={`user-power ${luckyNA ? "not-available" : ""} ${luckyUPNA ? "upgrade-NA" : ""}`}>
                    <button className={`
                            power-button lucky-button
                            ${confirmPower === `Add Lucky ${roman[luckyLevel]}` ? "glow" : ""}
                            `} 
                        onClick={() => addLucky()}
                        disabled={luckyNA || luckyUPNA}
                    >
                        <img 
                            className={`
                                power-logo lucky-logo
                                ${confirmPower === `Add Lucky ${roman[luckyLevel]}` ? "glow" : ""}
                                `} 
                            src="images/clover.png" alt="lucky"
                        />
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name lucky-name">
                            <div>{`Lucky ${roman[luckyLevel]}`}</div>
                            <div>{`Current: ${(luckyLevel * luckyValue) + (Math.floor(level/luckyRate) * (luckyLevel * luckyInc))}`} / {(luckyLevel) * luckyInc}</div> 
                        </div>
                        <div className="power-select-desc">
                            {luckyNA
                                ? "Available on Level 8."
                                : luckyUPNA
                                ? `Available on Level ${(luckyLevel * 16) + 8}`
                                : `Earn ${((luckyLevel + 1) * luckyValue) + (Math.floor(level/luckyRate) * ((luckyLevel + 1) * luckyInc))} coins for every "Yes" answer.`
                            } 
                            {!luckyUPNA && <div>{`Increases by ${(luckyLevel + 1) * luckyInc} on every ${luckyRate}th level`}</div>}
                        </div>
                    </div>
                </div>
                <div className={`user-power ${unluckyNA ? "not-available" : ""} ${unluckyUPNA ? "upgrade-NA" : ""}`}>
                    <button className={`
                            power-button unlucky-button
                            ${confirmPower === `Add Unlucky ${roman[unluckyLevel]}` ? "glow" : ""}
                            `} 
                        onClick={() => addUnlucky()}
                        disabled={unluckyNA || unluckyUPNA}
                    >
                        <img 
                            className={`
                                power-logo unlucky-logo
                                ${confirmPower === `Add Unlucky ${roman[unluckyLevel]}` ? "glow" : ""}
                                `} 
                            src="images/mirror.png" alt="unlucky"
                        />
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name unlucky-name">
                            <div>{`Unlucky ${roman[unluckyLevel]}`}</div>
                            <div>{`Current: ${(unluckyLevel * unluckyValue) + (Math.floor(level/unluckyRate) * (unluckyLevel * unluckyInc))} / ${(unluckyLevel) * unluckyInc}`}</div> 
                        </div>
                        <div className="power-select-desc">
                            {unluckyNA
                                ? "Available on Level 8"
                                : unluckyUPNA
                                ? `Available on Level ${(unluckyLevel * 16) + 8}`
                                : `Earn ${((unluckyLevel + 1) * unluckyValue) + (Math.floor(level/unluckyRate) * ((unluckyLevel + 1) * unluckyInc))} coins for every "No" answer.`
                            } 
                            {!unluckyUPNA && <div>{`Increases by ${(unluckyLevel + 1) * unluckyInc} on every ${unluckyRate}th level`}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <button className="select-power" onClick={() => addPower()} disabled={selectDisabled}>{confirmPower}</button>
        </div>
    )
}