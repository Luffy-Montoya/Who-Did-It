import React from "react"
import { LayoutContext } from "./Layout"

export default function CategoryDisplay() {

    const { optionsBar, setOptionsBar, setAskOption } = React.useContext(LayoutContext)

    const setCategory = (name) => {
      setOptionsBar(name)
      setAskOption("")
    }
    
    return(
            <div className="category-display">
                <button className={optionsBar === "head" ? "category-selected" : ""} onClick={() => setCategory("head")}>Head</button>
                <button className={optionsBar === "hair" ? "category-selected" : ""} onClick={() => setCategory("hair")}>Hair</button>
                <button className={optionsBar === "genderSkin" ? "category-selected" : ""} onClick={() => setCategory("genderSkin")}>Gender/Skin</button>
                <button className={optionsBar === "clothes" ? "category-selected" : ""} onClick={() => setCategory("clothes")}>Clothes</button>
                <button className={optionsBar === "shirt" ? "category-selected" : ""} onClick={() => setCategory("shirt")}>Shirt</button>
                <button className={optionsBar === "pants" ? "category-selected" : ""} onClick={() => setCategory("pants")}>Pants</button>
                <button className={optionsBar === "shoes" ? "category-selected" : ""} onClick={() => setCategory("shoes")}>Shoes</button>
                <button className={optionsBar === "accessories" ? "category-selected" : ""} onClick={() => setCategory("accessories")}>Misc.</button>
            </div>    
    )
}