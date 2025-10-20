import React from "react"
import { LayoutContext } from "./Layout"

export default function Modal(){

    const { 
        modalVisible, setModalVisible, setGameStarted, setFirstGameStarted, 
        setGameOver, setGameResetting, level, setLevel, culprit, firstModalGone, setFirstModalGone,
        coinsWon, lowWalletBonus, heroBonus, lowWalletAmount, heroAmount
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
        setModalVisible(false)
        setLevel(level + 1)
        setTimeout(() => {
            setGameResetting(true)
        }, 500)
        setTimeout(() => {
            setGameResetting(false)
        }, 1000)
    }

    return (
        <div className={`modal ${modalVisible ? "" : "offscreen"}`}>
            <div className="modal-top-text">{!firstModalGone ? "Someone spilled the beans..." : `It was ${culprit.name}!`}</div>
            <div className="modal-bottom-text-container">
                <div className="bottom-text-1">
                    {
                    !firstModalGone 
                    ? "You wanna know who?"
                        : heroBonus
                        ? `+ ${coinsWon - heroAmount} coins!`
                            : lowWalletBonus
                            ? `+ ${coinsWon - lowWalletAmount} coins!` 
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
        </div>
    )
}