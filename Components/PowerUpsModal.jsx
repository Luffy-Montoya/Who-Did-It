import React from "react"
import { LayoutContext } from "./Layout"

export default function PowerUpsModal(){

    const { 
        powerSelectHidden, setPowerSelectHidden
    } = React.useContext(LayoutContext)

    

    return (
        <div className={`power-ups-modal ${powerSelectHidden ? "power-select-hidden" : ""}`}>
            <div className="power-ups-title">Choose a Power</div>
            <div className="power-ups-container active-powers">
                <div className={`user-power`}>
                    <div className="power-button probe-button"><img className="power-logo probe-logo" src="images/probe.png" alt="probe"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name probe-name">
                            Probe - x4
                        </div>
                        <div className="power-select-desc">
                            Select a single suspect to reveal if they are the culprit.
                            <div>Unavailable if more than 6 in inventory.</div>                            
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <div className="power-button sweep-button"><img className="power-logo sweep-logo" src="images/broom.png" alt="sweep"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name sweep-name">
                            Sweep - x3
                        </div>
                        <div className="power-select-desc">
                            Instantly eliminate ~45% of the innocent suspects at random.
                            <div>Unavailable if more than 4 in inventory.</div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <div className="power-button insight-button"><img className="power-logo insight-logo" src="images/insight.png" alt="insight"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name">
                            Insight - x2
                        </div>
                        <div className="power-select-desc">
                            Select any number of suspects and reveal if the culprit is in that group.
                            <div>Unavailable if more than 3 in inventory.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="power-ups-container passive-powers">
                <div className={`user-power`}>
                    <div className="power-button charity-button"><img className="power-logo charity-logo" src="images/gift.png" alt="charity"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name charity-name">
                            Charity I 
                        </div>
                        <div className="power-select-desc">
                            7% chance to get a free question.
                            Increases by 7% with every upgrade.  
                            <div>Max 35%.</div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <div className="power-button lucky-button"><img className="power-logo lucky-logo" src="images/clover.png" alt="lucky"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name lucky-name">
                            Lucky I 
                        </div>
                        <div className="power-select-desc">
                            Earn 5 coins for every "Yes" answer.
                            Increases by 5 coins with every upgrade.  
                            <div>Max 25.</div>
                        </div>
                    </div>
                </div>
                <div className={`user-power`}>
                    <div className="power-button unlucky-button"><img className="power-logo unlucky-logo" src="images/mirror.png" alt="unlucky"/></div>
                    <div className="name-desc-container">
                        <div className="power-select-name unlucky-name">
                            Unlucky I 
                        </div>
                        <div className="power-select-desc">
                            Earn 2 coins for every "No" answer.
                            Increases by 2 coins with every upgrade.  
                            <div>Max 10.</div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="select-power" onClick={() => setPowerSelectHidden(true)}>Select Power</button>
        </div>
    )
}