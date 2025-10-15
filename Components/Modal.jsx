import React from "react"
import { LayoutContext } from "./Layout"

export default function Modal(){

    const { modalVisible, setModalVisible } = React.useContext(LayoutContext)

    return (
        <div className={`modal ${modalVisible ? "" : "offscreen"}`}>
            <div className="modal-top-text">Oh no!  Somebody is amassing a giant army of crows to take over the city!</div>
            <div className="modal-bottom-text-container">
                <div className="bottom-text-1">You wanna know who?</div>
                <div className="bottom-text-2">It's gonna cost you.</div>
            </div>
            <div className="modal-button-container">
                <button onClick={() => setModalVisible(false)}className={`modal-button-1 ${modalVisible ? "" : "offscreen"}`}>Ask Away!</button>
                <button className={`modal-button-2 ${modalVisible ? "" : "offscreen"}`}>Button 2</button>
            </div> 
        </div>
    )
}