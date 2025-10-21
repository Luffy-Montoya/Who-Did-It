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
import Select from "../Options/Select"
import AskDisplay from "./AskDisplay"
import Modal from "./Modal"
import ToggleMainDisplay from "../Functions/ToggleMainDisplay"
import PowerUpsModal from "./PowerUpsModal"

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
    const [shuffled, setShuffled] = React.useState([])
    const [isVisible, setIsVisible ] = React.useState(false)
    const [price, setPrice] = React.useState(0)
    const [set1, setSet1] = React.useState(true)
    const [set2, setSet2] = React.useState(false)
    const [leftVisible, setLeftVisible] = React.useState(false)
    const [rightVisible, setRightVisible] = React.useState(true)
    const [wallet, setWallet] = React.useState(100)
    const [culprit, setCulprit] = React.useState({})
    const [sizeChanging, setSizeChanging] = React.useState(false)
    const [toCategories, setToCategories] = React.useState(true)
    const [toAsk, setToAsk] = React.useState(false)
    const [questionAsked, setQuestionAsked] = React.useState(false)
    const [fade, setFade] = React.useState(false)
    const [yesOrNo, setYesOrNo] = React.useState("")
    const [youWin, setYouWin] = React.useState(false)
    const [youLose, setYouLose] = React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false)
    const [gameStarted, setGameStarted] = React.useState(false)
    const [firstGameStarted, setFirstGameStarted] = React.useState(false)
    const [gameOver, setGameOver] = React.useState(false)
    const [gameResetting, setGameResetting] = React.useState(false)
    const [level, setLevel] = React.useState(1)
    const [cannotAfford, setCannotAfford] = React.useState(false)
    const [firstModalGone, setFirstModalGone] = React.useState(false)
    const [heroModeOn, setHeroModeOn] = React.useState(false)
    const [probeCount, setProbeCount] = React.useState(0)
    const [heroBonus, setHeroBonus] = React.useState(false)
    const [lowWalletBonus, setLowWalletBonus] = React.useState(false)
    const [powerSelectHidden, setPowerSelectHidden] = React.useState(true)
    const [yesCount, setYesCount] = React.useState(0)
    const [noCount, setNoCount] = React.useState(0)

    const heroAmount = Math.round((calcCoinsWon(level) / 2) / 5) * 5
    const lowWalletAmount = Math.ceil(level / 5) * 5

    const coinsWon = (
        calcCoinsWon(level) 
        + (lowWalletBonus && !heroBonus ? lowWalletAmount : 0) 
        + (heroBonus ? heroAmount : 0)
    )

    function calcCoinsWon(level) {
        const base = 40                      // starting reward
        const growth = 4 + level * 0.1       // scales with level
        const coins = base + growth * Math.log(level + 1) * 3  // mild curve
        const rounded = Math.round(coins / 5) * 5              // multiple of 5
        return rounded
    }

    return (
        <LayoutContext.Provider value={{ 
            optionsBar, setOptionsBar, categoryDisplay, setCategoryDisplay,
            askDisplay, setAskDisplay, askQuestion, setAskQuestion,
            charactersLeft, setCharactersLeft, row1, setRow1,
            row2, setRow2, row3, setRow3, row4, setRow4,
            active, setActive, price, setPrice, sizeChanging, setSizeChanging,
            set1, setSet1, set2, setSet2, leftVisible, setLeftVisible,
            rightVisible, setRightVisible, wallet, setWallet, culprit, setCulprit,
            askOption, setAskOption, toAsk, setToAsk, 
            toCategories, setToCategories, questionAsked, setQuestionAsked,
            fade, setFade, yesOrNo, setYesOrNo, youWin, setYouWin, youLose, setYouLose, 
            modalVisible, setModalVisible, gameStarted, setGameStarted,
            firstGameStarted, setFirstGameStarted, gameOver, setGameOver,
            shuffled, setShuffled, isVisible, setIsVisible, gameResetting, setGameResetting,
            level, setLevel, cannotAfford, setCannotAfford, firstModalGone, setFirstModalGone,
            coinsWon, heroModeOn, setHeroModeOn, probeCount, setProbeCount, heroBonus, setHeroBonus,
            lowWalletBonus, setLowWalletBonus, heroAmount, lowWalletAmount, powerSelectHidden, setPowerSelectHidden,
            yesCount, setYesCount, noCount, setNoCount
        }}>

            <div className="layout">
                <Modal/>
                <PowerUpsModal />
                <Header>
                    <ToggleMainDisplay />
                    <Dash />
                </Header>
                <MainDisplay>
                    {categoryDisplay && <CategoryDisplay />}
                    {askDisplay && <AskDisplay />}
                </MainDisplay>
                <OptionsDisplay>
                    {(optionsBar === "") && <Select />}
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