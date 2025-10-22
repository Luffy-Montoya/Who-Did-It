import React from "react"
import { LayoutContext } from "./Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"

export default function InventoryModal(){

    const { 
        powerSelectHidden, setPowerSelectHidden, probeCount, setProbeCount,
            sweepCount, setSweepCount, insightCount, setInsightCount, charityLevel, setCharityLevel,
            luckyLevel, setLuckyLevel, unluckyLevel, setUnluckyLevel, confirmPower, setConfirmPower,
            selectDisabled, setSelectDisabled, inventoryHidden, setInventoryHidden, usePower, setUsePower,
            setProbeEnabled, setSweepEnabled, setInsightEnabled, setFade, setToAsk, setToCategories,
            setAskDisplay, setCategoryDisplay, setOptionsBar
            
    } = React.useContext(LayoutContext)

    const roman = ["I", "II", "III", "IV", "V"]

    function useProbe() {
        setUsePower("Use Probe")
    }

    function useSweep() {
        setUsePower("Use Sweep")
    }

    function useInsight() {
        setUsePower("Use Insight")
    }

    function activatePower() {
        setInventoryHidden(true)
        setOptionsBar("")
        setTimeout(() => {
            setAskDisplay(true)
            setCategoryDisplay(false)
        }, 250)
        setFade(false)
        setToCategories(false)
        setTimeout(() => {
            setToAsk(true)
        }, 300)
    
        if (usePower === "Use Probe") {
            setProbeEnabled(true)
        } else if (usePower === "Use Sweep") {
            setSweepEnabled(true)
            setSweepCount(prev => prev - 1)
        } else if (usePower === "Use Insight") {
            setInsightEnabled(true)
            setInsightCount(prev => prev - 1)
        }     
    }


    return (
        <div className={`inventory-modal ${inventoryHidden ? "inventory-hidden" : ""}`}>
            <div className="inv-title">Inventory</div>
            <div className="inventory-body">
                <div className="inv-power-container">
                    <button 
                        className="power-button probe-button inv-button" 
                        onClick={() => useProbe()} 
                        disabled={probeCount === 0}
                    >
                        <img className="power-logo probe-logo" src="images/probe.png" alt="probe"/>
                    </button>
                    <div className="inv-power-name">Probe</div>
                    <div className="inv-qty">{`Qty: ${probeCount}`}</div>
                </div>
                <div className="inv-power-container">    
                    <button 
                        className="power-button sweep-button inv-button" 
                        onClick={() => useSweep()} 
                        disabled={sweepCount === 0}
                    >
                        <img className="power-logo sweep-logo" src="images/broom.png" alt="sweep"/>
                    </button>
                    <div className="inv-power-name">Sweep</div>
                    <div className="inv-qty">{`Qty: ${sweepCount}`}</div>
                </div>
                <div className="inv-power-container">    
                    <button 
                        className="power-button insight-button inv-button" 
                        onClick={() => useInsight()} 
                        disabled={insightCount === 0}
                    >
                        <img className="power-logo insight-logo" src="images/insight.png" alt="insight"/>
                    </button>
                    <div className="inv-power-name">Insight</div>
                    <div className="inv-qty">{`Qty: ${insightCount}`}</div>
                </div>
                <div className="inv-power-container">    
                    <button className="power-button charity-button inv-button" onClick={() => addCharity()} disabled={charityLevel === 5}>
                        <img className="power-logo charity-logo" src="images/gift.png" alt="charity"/>
                    </button>
                    <div className="inv-power-name">Charity</div>
                    <div className="inv-qty">{charityLevel > 0 ? `${roman[charityLevel]}` : "---"}</div>
                </div>
                <div className="inv-power-container">    
                    <button className="power-button lucky-button inv-button" onClick={() => addLucky()} disabled={luckyLevel === 5}>
                        <img className="power-logo lucky-logo" src="images/clover.png" alt="lucky"/>
                    </button>
                    <div className="inv-power-name">Lucky</div>
                    <div className="inv-qty">{luckyLevel > 0 ? `${roman[luckyLevel]}` : "---"}</div>
                </div>
                <div className="inv-power-container">    
                    <button className="power-button unlucky-button inv-button" onClick={() => addUnlucky()} disabled={unluckyLevel === 5}>
                        <img className="power-logo unlucky-logo" src="images/mirror.png" alt="unlucky"/>
                    </button>
                    <div className="inv-power-name">Unlucky</div>
                    <div className="inv-qty">{unluckyLevel > 0 ? `${roman[unluckyLevel]}` : "---"}</div>
                </div>
            </div>
            <div className="inv-button-container">
                <button className="select-power inv-power" onClick={() => setInventoryHidden(true)}>Back</button>
                <button className="select-power inv-power" onClick={() => activatePower()}>{usePower}</button>
            </div>
        </div>
    )
}