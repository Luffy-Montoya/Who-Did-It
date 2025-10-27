import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { modalVisible, setModalVisible, setInventoryHidden, setPowerSelectHidden, charactersLeft, askQuestion, row1, insightEnabled, phiArray } = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
}
return (
    <>
    <button onClick={() => toggle()}>Tog</button>
    <button onClick={() => setInventoryHidden(prev => !prev)}>Inv</button>
    <button onClick={() => setPowerSelectHidden(prev => !prev)}>Sel</button>
    </>
)
}

