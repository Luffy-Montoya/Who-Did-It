import React from "react"
import { LayoutContext } from "./Layout"

export default function PowerUpsModal(){

    const { 
        
    } = React.useContext(LayoutContext)

    

    return (
        <div className={`power-ups-modal`}>
            <div className="power-ups-container active-powers">
                <div className={`user-power`}>
                    <div className="power-button"><img className="power-logo probe-logo" src="" alt="probe"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name probe-name">
                            Probe - x4
                        </div>
                        <div className="power-select-desc">
                            Select one suspect to reveal if they are the culprit.
                            Unavailable if more than 8 in inventory.                            
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <div className="power-button"><img className="power-logo sweep-logo" src="" alt="sweep"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name sweep-name">
                            Sweep - x3
                        </div>
                        <div className="power-select-desc">
                            Instantly eliminate half of the innocent suspects at random.
                            Unavailable if more than 6 in inventory.
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <div className="power-button"><img className="power-logo insight-logo" src="" alt="insight"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name">
                            Insight - x2
                        </div>
                        <div className="power-select-desc">
                            Select any number of suspects and reveal if the culprit is in that group.
                            Unavailable if more than 4 in inventory.
                        </div>
                    </div>
                </div>
            </div>
            <div className="power-ups-container passive-powers">
                <div className={`user-power`}>
                    <div className="power-button"><img className="power-logo charity-logo" src="" alt="charity"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name charity-name">
                            Charity 1 
                        </div>
                        <div className="power-select-desc">
                            7% chance to get a free question.
                            Increases by 7% with every upgrade.  Max 35%.
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <div className="power-button lucky-button"><img className="power-logo lucky-logo" src="images/clover.png" alt="lucky"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name lucky-name">
                            Lucky 1 
                        </div>
                        <div className="power-select-desc">
                            Earn 5 coins for every "Yes" answer.
                            Increases by 5 coins with every upgrade.  Max 25.
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <div className="power-button unlucky-button"><img className="power-logo unlucky-logo" src="images/mirror.png" alt="unlucky"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name unlucky-name">
                            Unlucky 1 
                        </div>
                        <div className="power-select-desc">
                            Earn 1 coin for every "No" answer.
                            Increases by 1 coin with every upgrade.  Max 5.
                        </div>
                    </div>
                </div>
            </div>
            <button>Select Power</button>
        </div>
    )
}