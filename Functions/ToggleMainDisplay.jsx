import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { modalVisible, setModalVisible, setInventoryHidden, setPowerSelectHidden, charityLevel, charityCount, charityEnabled, charityMin} = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
        console.log("Charity Enabled: ", charityEnabled)
        console.log("Charity Progress: ", charityCount, " / ", charityMin[charityLevel])
}
return (
    <>
    <button onClick={() => toggle()}>Tog</button>
    <button onClick={() => setInventoryHidden(prev => !prev)}>Inv</button>
    <button onClick={() => setPowerSelectHidden(prev => !prev)}>Sel</button>
    </>
)
}

