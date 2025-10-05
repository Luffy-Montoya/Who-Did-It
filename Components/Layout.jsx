import React from "react"
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

const LayoutContext = React.createContext()
export { LayoutContext }

export default function Layout() {

    const [askDisplay, setAskDisplay] = React.useState(false)
    const [categoryDisplay, setCategoryDisplay] = React.useState(true)
    const [askQuestion, setAskQuestion] = React.useState("")
    const [categories, setCategories] = React.useState({
        head: false,
        hair: false,
        genderSkin: false,
        clothes: false,
        shirt: false,
        pants: false,
        shoes: false,
        accessories: false,
    })
    const coin = <img className="coin" src="../images/coin.png"/>

    return (
        <LayoutContext.Provider value={{ 
            categories, 
            setCategories,
            categoryDisplay,
            setCategoryDisplay,
            askDisplay,
            setAskDisplay,
            askQuestion,
            setAskQuestion,
            coin 
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
                    {Object.values(categories).every(value => value === false) && <h3>Select a Category</h3>}
                    {categories.head && <Head />}
                    {categories.hair && <Hair />}
                    {categories.genderSkin && <GenderSkin />}
                    {categories.clothes && <Clothes />}
                    {categories.shirt && <Shirt />}
                    {categories.pants && <Pants />}
                    {categories.shoes && <Shoes />}
                    {categories.accessories && <Accessories />}
                </OptionsDisplay>
                <MainBody />
            </div>
        </LayoutContext.Provider>
    )
}