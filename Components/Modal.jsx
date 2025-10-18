import React from "react"
import { LayoutContext } from "./Layout"

export default function Modal(){

    const { 
        modalVisible, setModalVisible, setGameStarted, setFirstGameStarted, setGameOver,
        wallet, setWallet, setGameResetting, level, setLevel, culprit
    } = React.useContext(LayoutContext)

    function startGame() {
        setModalVisible(false)
        setGameStarted(true)
        setFirstGameStarted(true)
        setGameOver(false)
    }

    function nextRound() {
        setModalVisible(false)
        setWallet(wallet + 50 + coinsWon)
        setLevel(level + 1)
        setTimeout(() => {
            setGameResetting(true)
        }, 500)
        setTimeout(() => {
            setGameResetting(false)
        }, 1000)
    }

    const coinsWon = 50 + (Math.floor((level + 1) / 5) * 10)

    return (
        <div className={`modal ${modalVisible ? "" : "offscreen"}`}>
            <div className="modal-top-text">{`${culprit.name} was the spy!`}</div>
            <div className="modal-bottom-text-container">
                <div className="bottom-text-1">Great job.</div>
                <div className="bottom-text-2">{`Here's ${coinsWon} more coins!`}</div>
            </div>
            <div className="modal-button-container">
                <button onClick={() => startGame(false)} className={`modal-button-1 ${modalVisible ? "" : "offscreen"}`}>Ask Away!</button>
                <button onClick={() => nextRound()} className={`modal-button-2 ${modalVisible ? "" : "offscreen"}`}>Next Round</button>
            </div> 
        </div>
    )
}