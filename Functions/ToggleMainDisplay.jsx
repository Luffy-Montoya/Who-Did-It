import React from "react"
import { LayoutContext } from "../Components/Layout"
import { charityMin } from "./Balance"

export default function ToggleMainDisplay(){

const { modalVisible, setModalVisible, setInventoryHidden, setPowerSelectHidden, charityCount, charityTemp,
        probeCount, sweepCount, insightCount
    } = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
        console.log("Charity: ", charityCount)
        console.log("Charity Temp: ", charityTemp)
}
return (
    <>
    <button onClick={() => toggle()}>Tog</button>
    <button 
        className={`
            vault-button
            ${probeCount > 0 && sweepCount === 0 && insightCount === 0 ? "have-probe" : ""}
            ${sweepCount > 0 && probeCount === 0 && insightCount === 0 ? "have-sweep" : ""}
            ${insightCount > 0 && probeCount === 0 && sweepCount === 0 ? "have-insight" : ""}
            ${probeCount > 0 && sweepCount > 0 && insightCount === 0 ? "have-probe-sweep" : ""}
            ${probeCount > 0 && insightCount > 0 && sweepCount === 0 ? "have-probe-insight" : ""}
            ${sweepCount > 0 && insightCount > 0 && probeCount === 0 ? "have-sweep-insight" : ""}
            ${probeCount > 0 && sweepCount > 0 && insightCount > 0 ? "have-all-three" : ""}
            `}
        onClick={() => setInventoryHidden(prev => !prev)}>
            Inv
    </button>
    <button onClick={() => setPowerSelectHidden(prev => !prev)}>Sel</button>
    </>
)
}

