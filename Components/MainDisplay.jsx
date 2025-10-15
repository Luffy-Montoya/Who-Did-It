import React from "react"
import { LayoutContext } from "./Layout"

const MainDisplayContext = React.createContext()
export { MainDisplayContext }

export default function MainDisplay({ children }) {

    const { modalVisible, gameStarted } = React.useContext(LayoutContext)

    return (
            
                <div className={`main-display ${modalVisible || !gameStarted ? "grayed" : ""}`}>
                    { children }
                </div>
        
    )
}