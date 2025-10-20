import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { toAsk, toCategories, setToAsk, setToCategories, modalVisible, setModalVisible} = React.useContext(LayoutContext)

function toggle(){
        setModalVisible(!modalVisible)
}
return (
    <button onClick={() => toggle()}>Toggle</button>
)
}

