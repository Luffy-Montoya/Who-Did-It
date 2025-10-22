import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { modalVisible, setModalVisible, heroBonus, probeCount, inventoryHidden, setInventoryHidden, setPowerSelectHidden, askDisplay } = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
        console.log(heroBonus)
        console.log(probeCount)
        console.log("Ask Display: ", askDisplay)
}
return (
    <>
    <button onClick={() => toggle()}>Tog</button>
    <button onClick={() => setInventoryHidden(prev => !prev)}>Inv</button>
    <button onClick={() => setPowerSelectHidden(prev => !prev)}>Sel</button>
    </>
)
}

