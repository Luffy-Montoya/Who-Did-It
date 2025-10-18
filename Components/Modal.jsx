import React from "react"
import { LayoutContext } from "./Layout"

export default function Modal(){

    const { 
        modalVisible, setModalVisible, setGameStarted, setFirstGameStarted, setGameOver,
        setIsVisible, wallet, setWallet, setGameResetting, level, setLevel
    } = React.useContext(LayoutContext)

    function startGame() {
        setModalVisible(false)
        setGameStarted(true)
        setFirstGameStarted(true)
        setGameOver(false)
    }

    function nextRound() {
        setModalVisible(false)
        setWallet(wallet + 45 + (level * 5))
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
            <div className="modal-top-text">Oh no!  Somebody is amassing a giant army of crows to take over the city!</div>
            <div className="modal-bottom-text-container">
                <div className="bottom-text-1">You wanna know who?</div>
                <div className="bottom-text-2">It's gonna cost you.</div>
            </div>
            <div className="modal-button-container">
                <button onClick={() => startGame(false)} className={`modal-button-1 ${modalVisible ? "" : "offscreen"}`}>Ask Away!</button>
                <button onClick={() => nextRound()} className={`modal-button-2 ${modalVisible ? "" : "offscreen"}`}>Next Round</button>
            </div> 
        </div>
    )
}