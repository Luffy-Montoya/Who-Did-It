import React, { useEffect } from "react"
import Header from "./Header"
import Dash from "./Dash"
import MainDisplay from "./MainDisplay"
import CategoryDisplay from "./CategoryDisplay"
import OptionsDisplay from "./OptionsDisplay"
import MainBody from "./MainBody"
import Head from "../Options/Head"
import Hair from "../Options/Hair"
import GenderSkin from "../Options/GenderSkin"
import Clothes from "../Options/Clothes"
import Shirt from "../Options/Shirt"
import Pants from "../Options/Pants"
import Shoes from "../Options/Shoes"
import Accessories from "../Options/Accessories"
import AskDisplay from "./AskDisplay"
import ToggleMainDisplay from "../Functions/ToggleMainDisplay"

export const LayoutContext = React.createContext()


export default function Layout() {

    const [askDisplay, setAskDisplay] = React.useState(false)
    const [categoryDisplay, setCategoryDisplay] = React.useState(true)
    const [askQuestion, setAskQuestion] = React.useState("")
    const [optionsBar, setOptionsBar] = React.useState("")
    const [askOption, setAskOption] = React.useState("")
    const [charactersLeft, setCharactersLeft] = React.useState([])
    const [row1, setRow1] = React.useState([])
    const [row2, setRow2] = React.useState([])
    const [row3, setRow3] = React.useState([])
    const [row4, setRow4] = React.useState([])
    const [active, setActive] = React.useState({})
    const [price, setPrice] = React.useState(0)
    const [set1, setSet1] = React.useState(true)
    const [set2, setSet2] = React.useState(false)
    const [leftVisible, setLeftVisible] = React.useState(false)
    const [rightVisible, setRightVisible] = React.useState(true)
    const [wallet, setWallet] = React.useState(100)
    const [culprit, setCulprit] = React.useState({})
    const [sizeChanging, setSizeChanging] = React.useState(false)

    return (
        <LayoutContext.Provider value={{ 
            optionsBar, setOptionsBar, categoryDisplay, setCategoryDisplay,
            askDisplay, setAskDisplay, askQuestion, setAskQuestion,
            charactersLeft, setCharactersLeft, row1, setRow1,
            row2, setRow2, row3, setRow3, row4, setRow4,
            active, setActive, price, setPrice, sizeChanging, setSizeChanging,
            set1, setSet1, set2, setSet2, leftVisible, setLeftVisible,
            rightVisible, setRightVisible, wallet, setWallet, culprit, setCulprit,
            askOption, setAskOption
        }}>

            <div className="layout">
                <Header>
                    <ToggleMainDisplay />
                    <Dash />
                </Header>
                <MainDisplay>
                    {categoryDisplay && <CategoryDisplay />}
                    {askDisplay && <AskDisplay />}
                </MainDisplay>
                <OptionsDisplay>
                    {(optionsBar === "") && <h3>Select a Category</h3>}
                    {(optionsBar === "head")&& <Head />}
                    {(optionsBar === "hair") && <Hair />}
                    {(optionsBar === "genderSkin") && <GenderSkin />}
                    {(optionsBar === "clothes") && <Clothes />}
                    {(optionsBar === "shirt") && <Shirt />}
                    {(optionsBar === "pants") && <Pants />}
                    {(optionsBar === "shoes") && <Shoes />}
                    {(optionsBar === "accessories") && <Accessories />}
                </OptionsDisplay>
                <MainBody />
            </div>
            
        </LayoutContext.Provider>
    )
}