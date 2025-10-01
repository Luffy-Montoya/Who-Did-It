import React from "react"
import { LayoutContext } from "../Components/Layout"

export default function ToggleMainDisplay(){

const { askDisplay, setAskDisplay, categoryDisplay, setCategoryDisplay } = React.useContext(LayoutContext)

function toggle(){
        setAskDisplay(!askDisplay)
        setCategoryDisplay(!categoryDisplay)
}
return (
    <button onClick={() => toggle()}>Toggle</button>
)
}

