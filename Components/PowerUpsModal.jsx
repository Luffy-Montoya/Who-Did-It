import React from "react"
import { LayoutContext } from "./Layout"

export default function PowerUpsModal(){

    const { 
        
    } = React.useContext(LayoutContext)

    

    return (
        <div className={`power-ups ${modalVisible ? "" : "offscreen"}`}>
            <div className="powers-container active-powers">
                <div className={`user-power probe`}>

                </div>
                <div className={`user-power sweep`}>

                </div>
                <div className={`user-power insight`}>

                </div>
            </div>
            <div className="powers-container passive-powers">
                <div className={`user-power charity`}>

                </div>
                <div className={`user-power lucky`}>

                </div>
                <div className={`user-power unlucky`}>

                </div>
            </div>
        </div>
    )
}