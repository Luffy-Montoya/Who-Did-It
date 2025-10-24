import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { modalVisible, setModalVisible, setInventoryHidden, setPowerSelectHidden, charactersLeft, askQuestion, row1, insightEnabled, phiArray } = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
        
        console.log(charactersLeft)
        console.log("Ask Question: ", askQuestion)
        console.log(askQuestion[1])
        console.log(askQuestion[2])
        console.log("Updated charactersLeft:", charactersLeft.map(c => `${c.name}:${c.insight}`))
        console.log("row1 insight:", row1.map(c => `${c.name}:${c.insight}`));
        console.log("insight: ", insightEnabled)
        console.log("phi: ", phiArray)
}
return (
    <>
    <button onClick={() => toggle()}>Tog</button>
    <button onClick={() => setInventoryHidden(prev => !prev)}>Inv</button>
    <button onClick={() => setPowerSelectHidden(prev => !prev)}>Sel</button>
    </>
)
}

