import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { toAsk, toCategories, setToAsk, setToCategories } = React.useContext(LayoutContext)

function toggle(){
        setToAsk(!toAsk)
        setToCategories(!toCategories)
}
return (
    <button onClick={() => toggle()}>Toggle</button>
)
}

