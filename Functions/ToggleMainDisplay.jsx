import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { modalVisible, setModalVisible, heroBonus, probeCount, inventoryHidden, setInventoryHidden, setPowerSelectHidden, askDisplay, gameOver, youWin } = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
        console.log(heroBonus)
        console.log(probeCount)
        console.log("Ask Display: ", askDisplay)
        console.log("Game Over: ", gameOver)
        console.log("You Win: ", youWin)
}
return (
    <>
    <button onClick={() => toggle()}>Tog</button>
    <button onClick={() => setInventoryHidden(prev => !prev)}>Inv</button>
    <button onClick={() => setPowerSelectHidden(prev => !prev)}>Sel</button>
    </>
)
}

