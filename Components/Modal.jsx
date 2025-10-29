import React from "react"
import { LayoutContext } from "./Layout"

export default function Modal(){

    const [levelInput, setLevelInput] = React.useState("")

    const { 
        modalVisible, setModalVisible, setGameStarted, setFirstGameStarted, 
        setGameOver, setGameResetting, setLevel, culprit, firstModalGone, setFirstModalGone,
        coinsWon, lowWalletBonus, heroBonus, lowWalletAmount, heroAmount, setWallet, lastCulprit, setLastCulprit
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
        setLevel(prev => prev + 1)
        setTimeout(() => {
            setGameResetting(true)
        }, 500)
        }

    return (
        <div className={`modal ${modalVisible ? "" : "offscreen"}`}>
            <div className="modal-top-text">
                <div>{!firstModalGone ? "Someone spilled the beans..." : `It was ${culprit.name}!`}</div>
                <div>{`Last Culprit: ${lastCulprit}`}</div>
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
            <form
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
            </form>
        </div>
    )
}