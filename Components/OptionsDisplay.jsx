import React from "react"

export default function OptionsDisplay({ children }) {
    return(
        <>
            <div className="options-display">
                {children}
            </div>
            <div className="options-ghost"></div>
        </>
    )
}