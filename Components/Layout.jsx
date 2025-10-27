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
import InventoryModal from "./InventoryModal"
import CantAffordDisplay from "./CantAffordDisplay"
import { getCharacters } from "../characters"

export const LayoutContext = React.createContext()


export default function Layout() {

    const [askDisplay, setAskDisplay] = React.useState(false)
    const [categoryDisplay, setCategoryDisplay] = React.useState(true)
    const [cantAffordDisplay, setCantAffordDisplay] = React.useState(false)
    const [toCantAfford, setToCantAfford] = React.useState(false)
    const [askQuestion, setAskQuestion] = React.useState("")
    const [optionsBar, setOptionsBar] = React.useState("")
    const [askOption, setAskOption] = React.useState("")
    const [charactersLeft, setCharactersLeft] = React.useState([])
    const [importedChars, setImportedChars] = React.useState(getCharacters().map(c => ({ ...c, chance: 1 })))
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
    const [wallet, setWallet] = React.useState(200)
    const [level, setLevel] = React.useState(1)
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
    const [cannotAfford, setCannotAfford] = React.useState(false)
    const [firstModalGone, setFirstModalGone] = React.useState(false)
    const [heroModeOn, setHeroModeOn] = React.useState(false)
    const [heroBonus, setHeroBonus] = React.useState(false)
    const [lowWalletBonus, setLowWalletBonus] = React.useState(false)
    const [powerSelectHidden, setPowerSelectHidden] = React.useState(true)
    const [inventoryHidden, setInventoryHidden] = React.useState(true)
    const [yesCount, setYesCount] = React.useState(0)
    const [noCount, setNoCount] = React.useState(0)
    const [probeCount, setProbeCount] = React.useState(0)
    const [sweepCount, setSweepCount] = React.useState(0)
    const [insightCount, setInsightCount] = React.useState(0)
    const [charityLevel, setCharityLevel] = React.useState(0)
    const [luckyLevel, setLuckyLevel] = React.useState(0)
    const [unluckyLevel, setUnluckyLevel] = React.useState(0)
    const [confirmPower, setConfirmPower] = React.useState("Select Power")
    const [usePower, setUsePower] = React.useState("Select Power")
    const [selectDisabled, setSelectDisabled] = React.useState(false)
    const [probeEnabled, setProbeEnabled] = React.useState(false)
    const [sweepEnabled, setSweepEnabled] = React.useState(false)
    const [insightEnabled, setInsightEnabled] = React.useState(false)
    const [charityEnabled, setCharityEnabled] = React.useState(false)
    const [phiArray, setPhiArray] = React.useState([])
    const [probeActivated, setProbeActivated] = React.useState(false)
    const [heroModeActivated, setHeroModeActivated] = React.useState(false)

    const heroAmount = Math.ceil((calcCoinsWon(level) / 1.5) / 5) * 5
    const lowWalletAmount = Math.ceil((calcCoinsWon(level) / 2.5) / 5) * 5

    const coinsWon = calcCoinsWon(level) 
        

    function calcCoinsWon(level) {
        const base = 45                      // starting reward
        const growth = 3 + level * 0.35       // scales with level
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
            coinsWon, heroModeOn, setHeroModeOn, heroBonus, setHeroBonus, lowWalletBonus, 
            setLowWalletBonus, heroAmount, lowWalletAmount, yesCount, setYesCount, noCount, setNoCount,
            powerSelectHidden, setPowerSelectHidden, probeCount, setProbeCount,
            sweepCount, setSweepCount, insightCount, setInsightCount, charityLevel, setCharityLevel,
            luckyLevel, setLuckyLevel, unluckyLevel, setUnluckyLevel, confirmPower, setConfirmPower,
            selectDisabled, setSelectDisabled, probeEnabled, setProbeEnabled,
            sweepEnabled, setSweepEnabled, insightEnabled, setInsightEnabled, phiArray, setPhiArray,
            probeActivated, setProbeActivated, heroModeActivated, setHeroModeActivated,
            inventoryHidden, setInventoryHidden, usePower, setUsePower, cantAffordDisplay, 
            setCantAffordDisplay, toCantAfford, setToCantAfford, charityEnabled, setCharityEnabled,
            importedChars, setImportedChars   
        }}>

            <div className="layout">
                <Modal/>
                <InventoryModal />
                <PowerUpsModal />
                <Header>
                    <ToggleMainDisplay />
                    <Dash />
                </Header>
                <MainDisplay>
                    {categoryDisplay && <CategoryDisplay />}
                    {askDisplay && <AskDisplay />}
                    {cantAffordDisplay && <CantAffordDisplay />}
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