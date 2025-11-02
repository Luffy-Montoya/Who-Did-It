import React from "react"
import { LayoutContext } from "./Layout"

export default function Modal(){

    const [levelInput, setLevelInput] = React.useState("")

    const { 
        modalVisible, setModalVisible, setGameStarted, setFirstGameStarted, level,
        setGameOver, setGameResetting, setLevel, culprit, firstModalGone, setFirstModalGone,
        coinsWon, lowWalletBonus, heroBonus, lowWalletAmount, heroAmount, setWallet, lastCulprit, setLastCulprit,
        probeEarned, sweepEarned, insightEarned, setProbeEarned, setInsightEarned, setSweepEarned
    } = React.useContext(LayoutContext)

    function startGame() {
        setModalVisible(false)
        setGameStarted(true)
        setFirstGameStarted(true)
        setGameOver(false)
        setTimeout(() => {
            setFirstModalGone(true)
        }, 1000)
    }

    function nextRound() {
        setLastCulprit(culprit.name)
        if (heroBonus) {
            setWallet(prev => prev + heroAmount)
        } else if (lowWalletBonus) {
            setWallet(prev => prev + lowWalletAmount)
        }
        setModalVisible(false)
        setTimeout(() => {
            setLevel(prev => prev + 1)
            setProbeEarned(false)
            setSweepEarned(false)
            setInsightEarned(false)
            setGameResetting(true)
        }, 500)
        }

    return (
        <div className={`modal ${modalVisible ? "" : "offscreen"}`}>
            <div className="modal-top-text">
                <div>{!firstModalGone ? "Someone spilled the beans..." : `It was ${culprit.name}!`}</div>
                {level !== 1 && <div>{`Last Culprit: ${lastCulprit}`}</div>}
            </div>
            <div className="modal-bottom-text-container">
                <div className="bottom-text-1">
                    {
                    !firstModalGone 
                    ? "You wanna know who?"
                        : heroBonus
                        ? `+ ${coinsWon} coins!`
                            : lowWalletBonus
                            ? `+ ${coinsWon} coins!` 
                                : `+ ${coinsWon} coins!`
                    }
                </div>
                {probeEarned && <div className="power-won">+1 Probe!</div>}
                {sweepEarned && <div className="power-won">+1 Sweep!</div>}
                {insightEarned && <div className="power-won">+1 Insight!</div>}
                <div className="bottom-text-2">
                    {
                    !firstModalGone 
                        ? "It's gonna cost you." 
                        : heroBonus
                            ? `+ ${heroAmount} hero bonus!`   
                            : lowWalletBonus
                                ? `+ ${lowWalletAmount} low wallet bonus!` 
                                : ""
                    }

                </div>
            </div>
            <div className="modal-button-container">
                {!firstModalGone ?
                <button onClick={() => startGame(false)} className="modal-button-1">Ask Away!</button> :
                <button onClick={() => nextRound()} className="modal-button-2">Next Round</button>
                }
            </div>
            {/* <form
                onSubmit={(e) => {
                e.preventDefault()
                setLevel(Number(levelInput)) // use your existing setLevel()
                }}
            >
                <input
                type="number"
                value={levelInput}
                onChange={(e) => setLevelInput(e.target.value)}
                placeholder="Enter level"
                />
                <button type="submit">Jump to Level</button>
            </form> */}
        </div>
    )
}