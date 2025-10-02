import React from "react"

export default function Header({ children }) {
    return(
        <div className="header">
            <h1>Who did it?</h1>
            {children}
        </div>
    )
}