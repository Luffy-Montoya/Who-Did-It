import React from "react"
import { LayoutContext } from "./Layout"

export default function AskDisplay() {

    const { askQuestion } = React.useContext(LayoutContext)

    return(
        <div className={"ask-display"}>
            {askQuestion}
        </div>
    )
}