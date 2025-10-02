import React from "react"
import CategoryDisplay from "./CategoryDisplay"

const MainDisplayContext = React.createContext()
export { MainDisplayContext }

export default function MainDisplay({ children }) {

    const [categoryDisplayed, setCategoryDisplayed] = React.useState(false)
    const [questionDisplayed, setQuestionDisplayed] = React.useState(false)
    const [head, setHead] = React.useState(false)
    const [hair, setHair] = React.useState(false)
    const [genderSkin, setGenderSkin] = React.useState(false)
    const [clothes, setClothes] = React.useState(false)
    const [shirt, setShirt] = React.useState(false)
    const [pants, setPants] = React.useState(false)
    const [shoes, setShoes] = React.useState(false)
    const [accessories, setAccessories] = React.useState(false)

    return (
            
                <div className="main-display">
                    { children }
                </div>
        
    )
}