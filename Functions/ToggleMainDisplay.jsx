import React from "react"
import { LayoutContext } from "../Components/Layout"
import { charityMin } from "./Balance"

export default function ToggleMainDisplay(){

const { modalVisible, setModalVisible, setInventoryHidden, setPowerSelectHidden, charityLevel, charityCount, charityTemp,
        probeTracker, sweepTracker, insightTracker
    } = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
        console.log("Charity: ", charityCount)
        console.log("Charity Temp: ", charityTemp)
}
return (
    <>
    <button onClick={() => toggle()}>Tog</button>
    <button onClick={() => setInventoryHidden(prev => !prev)}>Inv</button>
    <button onClick={() => setPowerSelectHidden(prev => !prev)}>Sel</button>
    </>
)
}

