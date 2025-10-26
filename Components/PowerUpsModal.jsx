import React from "react"
import { LayoutContext } from "./Layout"
import { 
        probeQty, sweepQty, sweepValue, insightQty, 
        charityChance, insightValue, luckyValue, luckyInc, 
        luckyRate, unluckyValue, unluckyInc, unluckyRate 
    } from "../Functions/Balance"

export default function PowerUpsModal(){

    const { 
        powerSelectHidden, setPowerSelectHidden, probeCount, setProbeCount,
            sweepCount, setSweepCount, insightCount, setInsightCount, charityLevel, setCharityLevel,
            luckyLevel, setLuckyLevel, unluckyLevel, setUnluckyLevel, confirmPower, setConfirmPower,
            selectDisabled, setSelectDisabled, level
    } = React.useContext(LayoutContext)

    const roman = [
        "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
        "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
        "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX",
        "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX", "XL",
        "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX", "L"
    ]

    function addProbe() {
        setConfirmPower(`Add Probe x${probeQty}`)
    }

     function addSweep() {
        setConfirmPower(`Add Sweep x${sweepQty}`)
    }

     function addInsight() {
        setConfirmPower(`Add Insight x${insightQty}`)
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
            if (confirmPower === `Add Probe x${probeQty}`) {
                setProbeCount(prev => prev + 6)
            } else if (confirmPower === `Add Sweep x${sweepQty}`) {
                setSweepCount(prev => prev + 4)
            } else if (confirmPower === `Add Insight x${insightQty}`) {
                setInsightCount(prev => prev + 2)
            } else if (confirmPower === `Add Charity ${roman[charityLevel]}`) {
                setCharityLevel(prev => prev + 1)
            } else if (confirmPower === `Add Lucky ${roman[luckyLevel]}`) {
                setLuckyLevel(prev => prev + 1)
            } else if (confirmPower === `Add Unlucky ${roman[unluckyLevel]}`) {
                setUnluckyLevel(prev => prev + 1)
            }
            setSelectDisabled(true)
            setTimeout(() => {
                setSelectDisabled(false)
                setConfirmPower("Select Power")
            }, 1000)
        }
    }


    return (
        <div className={`power-ups-modal ${powerSelectHidden ? "power-select-hidden" : ""}`}>
            <div className="power-ups-title">Choose a Power</div>
            <div className="power-ups-container active-powers">
                <div className={`user-power`}>
                    <button className="power-button probe-button" onClick={() => addProbe()}>
                        <img className="power-logo probe-logo" src="images/probe.png" alt="probe"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name probe-name">
                            <div>{`Probe - x${probeQty}`}</div>
                            <div>{`Qty: ${probeCount}`}</div>
                        </div>
                        <div className="power-select-desc">
                            Select a single suspect to reveal if they are the culprit.
                            <div></div>                            
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <button className="power-button sweep-button" onClick={() => addSweep()}>
                        <img className="power-logo sweep-logo" src="images/broom.png" alt="sweep"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name sweep-name">
                            <div>{`Sweep - x${sweepQty}`}</div>
                            <div>{`Qty: ${sweepCount}`}</div>
                        </div>
                        <div className="power-select-desc">
                            {`Instantly eliminate ~${sweepValue}% of the innocent suspects at random.`}
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <button className="power-button insight-button" onClick={() => addInsight()}>
                        <img className="power-logo insight-logo" src="images/insight.png" alt="insight"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name">
                            <div>{`Insight - x${insightQty}`}</div>
                            <div>{`Qty: ${insightCount}`}</div>
                        </div>
                        <div className="power-select-desc">
                            Select any number of suspects and reveal if the culprit is in that group.
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="power-ups-container passive-powers">
                <div className={`user-power`}>
                    <button className="power-button charity-button" onClick={() => addCharity()} disabled={charityLevel === 4}>
                        <img className="power-logo charity-logo" src="images/gift.png" alt="charity"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name charity-name">
                            <div>{`Charity ${charityLevel < 4 ? roman[charityLevel] : roman[4]}`}</div>
                            <div>{`Current: ${charityChance[charityLevel]}%`}</div> 
                        </div>
                        <div className="power-select-desc">
                            {charityLevel < 4 ? `${charityChance[charityLevel + 1]}% chance to get a free question.` : "Maxed."}  
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <button className="power-button lucky-button" onClick={() => addLucky()}>
                        <img className="power-logo lucky-logo" src="images/clover.png" alt="lucky"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name lucky-name">
                            <div>{`Lucky ${roman[luckyLevel]}`}</div>
                            <div>{`Current: ${(luckyLevel * luckyValue) + (Math.floor(level/luckyRate) * (luckyLevel * luckyInc))}`}</div> 
                        </div>
                        <div className="power-select-desc">
                            {`Earn ${((luckyLevel + 1) * luckyValue) + (Math.floor(level/luckyRate) * ((luckyLevel + 1) * luckyInc))} coins for every "Yes" answer.`}  
                            <div>{`Increases by ${(luckyLevel + 1) * 2} every ${luckyRate}th level`}</div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <button className="power-button unlucky-button" onClick={() => addUnlucky()}>
                        <img className="power-logo unlucky-logo" src="images/mirror.png" alt="unlucky"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name unlucky-name">
                            <div>{`Unlucky ${roman[unluckyLevel]}`}</div>
                            <div>{`Current: ${(unluckyLevel * unluckyValue) + (Math.floor(level/luckyRate) * (unluckyLevel * unluckyInc))}`}</div> 
                        </div>
                        <div className="power-select-desc">
                            {`Earn ${((unluckyLevel + 1) * unluckyValue) + (Math.floor(level/unluckyRate) * ((unluckyLevel + 1) * unluckyInc))} coins for every "No" answer.`}  
                            <div>{`Increases by ${(unluckyLevel + 1)} every ${unluckyRate}th level`}</div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="select-power" onClick={() => addPower()} disabled={selectDisabled}>{confirmPower}</button>
        </div>
    )
}