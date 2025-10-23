import React from "react"
import { LayoutContext } from "./Layout"

export default function PowerUpsModal(){

    const { 
        powerSelectHidden, setPowerSelectHidden, probeCount, setProbeCount,
            sweepCount, setSweepCount, insightCount, setInsightCount, charityLevel, setCharityLevel,
            luckyLevel, setLuckyLevel, unluckyLevel, setUnluckyLevel, confirmPower, setConfirmPower,
            selectDisabled, setSelectDisabled
    } = React.useContext(LayoutContext)

    const roman = ["I", "II", "III", "IV", "V"]

    function addProbe() {
        setConfirmPower("Add Probe x6")
    }

     function addSweep() {
        setConfirmPower("Add Sweep x4")
    }

     function addInsight() {
        setConfirmPower("Add Insight x3")
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
            if (confirmPower === "Add Probe x6") {
                setProbeCount(prev => prev + 6)
            } else if (confirmPower === "Add Sweep x4") {
                setSweepCount(prev => prev + 4)
            } else if (confirmPower === "Add Insight x3") {
                setInsightCount(prev => prev + 3)
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
                    <button className="power-button probe-button" onClick={() => addProbe()} disabled={probeCount > 6}>
                        <img className="power-logo probe-logo" src="images/probe.png" alt="probe"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name probe-name">
                            <div>Probe - x6</div>
                            <div>{`Supply: ${probeCount}`}</div>
                        </div>
                        <div className="power-select-desc">
                            Select a single suspect to reveal if they are the culprit.
                            <div>Unavailable if more than 6 owned.</div>                            
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <button className="power-button sweep-button" onClick={() => addSweep()} disabled={sweepCount > 4}>
                        <img className="power-logo sweep-logo" src="images/broom.png" alt="sweep"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name sweep-name">
                            <div>Sweep - x4</div>
                            <div>{`Supply: ${sweepCount}`}</div>
                        </div>
                        <div className="power-select-desc">
                            Instantly eliminate ~45% of the innocent suspects at random.
                            <div>Unavailable if more than 4 owned.</div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <button className="power-button insight-button" onClick={() => addInsight()} disabled={insightCount > 3}>
                        <img className="power-logo insight-logo" src="images/insight.png" alt="insight"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name">
                            <div>Insight - x3</div>
                            <div>{`Supply: ${insightCount}`}</div>
                        </div>
                        <div className="power-select-desc">
                            Select any number of suspects and reveal if the culprit is in that group.
                            <div>Unavailable if more than 3 owned.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="power-ups-container passive-powers">
                <div className={`user-power`}>
                    <button className="power-button charity-button" onClick={() => addCharity()} disabled={charityLevel === 5}>
                        <img className="power-logo charity-logo" src="images/gift.png" alt="charity"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name charity-name">
                            {`Charity ${roman[charityLevel]}`} 
                        </div>
                        <div className="power-select-desc">
                            {`${(charityLevel + 1) * 7}% chance to get a free question.
                            Increases by 7% with every upgrade.`}  
                            <div>Max 35%.</div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <button className="power-button lucky-button" onClick={() => addLucky()} disabled={luckyLevel === 5}>
                        <img className="power-logo lucky-logo" src="images/clover.png" alt="lucky"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name lucky-name">
                            {`Lucky ${roman[luckyLevel]}`} 
                        </div>
                        <div className="power-select-desc">
                            {`Earn ${(luckyLevel + 1) * 5} coins for every "Yes" answer.
                            Increases by 5 with every upgrade.`}  
                            <div>Max 25.</div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <button className="power-button unlucky-button" onClick={() => addUnlucky()} disabled={unluckyLevel === 5}>
                        <img className="power-logo unlucky-logo" src="images/mirror.png" alt="unlucky"/>
                    </button>
                    <div className="name-desc-container">
                        <div className="power-select-name unlucky-name">
                            {`Unlucky ${roman[unluckyLevel]}`} 
                        </div>
                        <div className="power-select-desc">
                            {`Earn ${(unluckyLevel + 1) * 2} coins for every "No" answer.
                            Increases by 2 with every upgrade.`}  
                            <div>Max 10.</div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="select-power" onClick={() => addPower()} disabled={selectDisabled}>{confirmPower}</button>
        </div>
    )
}