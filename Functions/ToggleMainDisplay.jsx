import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { modalVisible, setModalVisible, setInventoryHidden, setPowerSelectHidden, charityValue, charityBase, charityLevel, charityTries} = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
        console.log(charityValue)
        console.log("level:", charityBase[charityLevel])
        console.log("tries", charityTries)
}
return (
    <>
    <button onClick={() => toggle()}>Tog</button>
    <button onClick={() => setInventoryHidden(prev => !prev)}>Inv</button>
    <button onClick={() => setPowerSelectHidden(prev => !prev)}>Sel</button>
    </>
)
}

