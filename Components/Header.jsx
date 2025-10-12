import React from "react"
import { LayoutContext } from "./Layout"

export default function Header({ children }) {

    const { culprit } = React.useContext(LayoutContext)

    return(
        <div className="header">
            <h1>{culprit.name}</h1>
            {children}
        </div>
    )
}