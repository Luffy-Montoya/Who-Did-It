import React from "react"
import { LayoutContext } from "./Layout"
import { toggleQuestion } from "../Functions/toggleQuestion"
import { 
        probeQty, sweepQty, sweepValue, insightQty, 
        insightValue, luckyValue, luckyInc, charityMin, 
        luckyRate, unluckyValue, unluckyInc, unluckyRate,
        probeMin, sweepMin, insightMin, 
    } from "../Functions/Balance"

export default function InventoryModal(){

    const { 
            powerSelectHidden, setPowerSelectHidden, probeCount, setProbeCount,
            sweepCount, setSweepCount, insightCount, setInsightCount, charityLevel, setCharityLevel,
            luckyLevel, setLuckyLevel, unluckyLevel, setUnluckyLevel, confirmPower, setConfirmPower,
            selectDisabled, setSelectDisabled, inventoryHidden, setInventoryHidden, usePower, setUsePower,
            setProbeEnabled, setSweepEnabled, setInsightEnabled, setFade, setToAsk, setToCategories,
            setAskDisplay, setCategoryDisplay, setOptionsBar, setYesOrNo, setPhiArray, setCharactersLeft,
            level, setSweepTracker, probeLevel, insightLevel, sweepLevel
            
    } = React.useContext(LayoutContext)

    const roman = [
        "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
        "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
        "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX",
        "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX", "XL",
        "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX", "L"
    ]

    const sweepNA = level < 12
    const insightNA = level < 20
    const charityNA = level < 16 
    const luckyNA = level < 8
    const unluckyNA = level < 8

    const probeUPNA = probeCount === 0
    const sweepUPNA =  sweepCount === 0
    const insightUPNA = insightCount === 0
    const charityUPNA = charityLevel === 0
    const luckyUPNA = luckyLevel === 0
    const unluckyUPNA = unluckyLevel === 0

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
        setPhiArray([])
        if (usePower === "Use Probe" || usePower === "Use Insight"){
            setInventoryHidden(true)
            setOptionsBar("")
            setYesOrNo("")
            setTimeout(() => {
                setAskDisplay(true)
                setCategoryDisplay(false)
            }, 250)
            setFade(false)
            setToCategories(false)
            setTimeout(() => {
                setToAsk(true)
            }, 300)

            setTimeout(() => {
                setUsePower("Select Power")
            }, 1000)
        
            if (usePower === "Use Probe") {
                setProbeEnabled(true)
                setInsightEnabled(false)
            } else if (usePower === "Use Insight") {
                setPhiArray([]);
                setInsightEnabled(true);
                setProbeEnabled(false);
                setTimeout(() => {
                    setCharactersLeft(prev => prev.map(c => ({ ...c, insight: false })));
                }, 0);
            }
        } else if (usePower === "Use Sweep") {
                setInventoryHidden(true)
                setSweepEnabled(true)
                setProbeEnabled(false)
                setInsightEnabled(false)
                setSweepCount(prev => prev - 1)
                setTimeout(() => {
                    setSweepEnabled(false)
                }, 1000)
        }   
    }


    return (
        <div className={`inventory-modal ${inventoryHidden ? "inventory-hidden" : ""}`}>
            <div className="inv-title">Inventory</div>
            <div className="inventory-body">
                <div className={`inv-power-container ${probeUPNA ? "upgrade-NA" : ""}`}>
                    <button 
                        className="power-button probe-button inv-button" 
                        onClick={() => useProbe()} 
                        disabled={probeCount === 0}
                    >
                        <img className="power-logo probe-logo" src="images/probe.png" alt="probe"/>
                    </button>
                    <div className="inv-power-name">
                        {probeLevel === 4 ? "Probe IV" : `Probe ${roman[probeLevel - 1]}`}
                    </div>
                    <div className="inv-qty">{`Qty: ${probeCount} / ${probeMin[probeLevel]}-${probeLevel > 0 ? probeMin[probeLevel] + 1 : "0"}`}</div>
                </div>
                <div className={`inv-power-container ${sweepNA ? "not-available" : sweepUPNA ? "upgrade-NA" : ""}`}>    
                    <button 
                        className="power-button sweep-button inv-button" 
                        onClick={() => useSweep()} 
                        disabled={sweepCount === 0}
                    >
                        <img className="power-logo sweep-logo" src="images/broom.png" alt="sweep"/>
                    </button>
                    <div className="inv-power-name">
                        {sweepLevel === 4 ? "Sweep IV" : sweepLevel === 0 ? "Sweep" : `Sweep ${roman[sweepLevel - 1]}`}
                        </div>
                    <div className="inv-qty">{`Qty: ${sweepCount} / ${sweepMin[sweepLevel]}-${sweepLevel > 0 ? sweepMin[sweepLevel] + 1 : "0"}`}</div>
                </div>
                <div className={`inv-power-container ${insightNA ? "not-available" : insightUPNA ? "upgrade-NA" : ""}`}>    
                    <button 
                        className="power-button insight-button inv-button" 
                        onClick={() => useInsight()} 
                        disabled={insightCount === 0}
                    >
                        <img className="power-logo insight-logo" src="images/insight.png" alt="insight"/>
                    </button>
                    <div className="inv-power-name">
                        {insightLevel === 4 ? "Insight IV" : insightLevel === 0 ? "Insight" : `Insight ${roman[insightLevel - 1]}`}
                        </div>
                    <div className="inv-qty">{`Qty: ${insightCount} / ${insightMin[insightLevel]}-${insightLevel > 0 ? insightMin[insightLevel] + 1 : "0"}`}</div>
                </div>
                <div className={`inv-power-container ${charityNA ? "not-available" : charityUPNA ? "upgrade-NA" : ""}`}>    
                    <button className="power-button charity-button inv-button">
                        <img className="power-logo charity-logo" src="images/gift.png" alt="charity"/>
                    </button>
                    <div className="inv-power-name">{charityLevel > 0 ? `Charity ${roman[charityLevel - 1]}` : ""}</div>
                    <div className="inv-qty">{charityLevel > 0 ? `%` : ""}</div>
                </div>
                <div className={`inv-power-container ${luckyNA ? "not-available" : luckyUPNA ? "upgrade-NA" : ""}`}>    
                    <button className="power-button lucky-button inv-button">
                        <img className="power-logo lucky-logo" src="images/clover.png" alt="lucky"/>
                    </button>
                    <div className="inv-power-name">{luckyLevel > 0 ? `Lucky ${roman[luckyLevel - 1]}` : ""}</div>
                    <div className="inv-qty">{luckyLevel > 0 ? `${(luckyLevel * luckyValue) + (Math.floor(level/luckyRate) * (luckyLevel * luckyInc))} c` : ""}</div>
                </div>
                <div className={`inv-power-container ${unluckyNA ? "not-available" : unluckyUPNA ? "upgrade-NA" : ""}`}>    
                    <button className="power-button unlucky-button inv-button">
                        <img className="power-logo unlucky-logo" src="images/mirror.png" alt="unlucky"/>
                    </button>
                    <div className="inv-power-name">{unluckyLevel > 0 ? `Unlucky ${roman[unluckyLevel - 1]}` : ""}</div>
                    <div className="inv-qty">{unluckyLevel > 0 ? `${(unluckyLevel * unluckyValue) + (Math.floor(level/unluckyRate) * (unluckyLevel * unluckyInc))} c` : ""}</div>
                </div>
            </div>
            <div className="inv-button-container">
                <button className="select-power inv-power" onClick={() => setInventoryHidden(true)}>Back</button>
                <button className="select-power inv-power" onClick={() => activatePower()}>{usePower}</button>
            </div>
        </div>
    )
}