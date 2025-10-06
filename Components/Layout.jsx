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
    const coin = <img className="coin" src="data:image/png;base64,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"/>

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