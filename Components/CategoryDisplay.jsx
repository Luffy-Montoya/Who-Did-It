import React from "react"
import { LayoutContext } from "./Layout"

export default function CategoryDisplay() {

    const { categories, setCategories, setAskOption } = React.useContext(LayoutContext)

    const setCategory = (name) => {
      setCategories((prev) =>
        Object.keys(prev).reduce((acc, key) => {
          acc[key] = key === name
          return acc
        }, {})
      )
      setAskOption("")
    }

    function selected(category) {
      return categories[category]
    }
    
    return(
            <div className="category-display">
                <button className={selected("head") ? "category-selected" : ""} onClick={() => setCategory("head")}>Head</button>
                <button className={selected("hair") ? "category-selected" : ""} onClick={() => setCategory("hair")}>Hair</button>
                <button className={selected("genderSkin") ? "category-selected" : ""} onClick={() => setCategory("genderSkin")}>Gender/Skin</button>
                <button className={selected("clothes") ? "category-selected" : ""} onClick={() => setCategory("clothes")}>Clothes</button>
                <button className={selected("shirt") ? "category-selected" : ""} onClick={() => setCategory("shirt")}>Shirt</button>
                <button className={selected("pants") ? "category-selected" : ""} onClick={() => setCategory("pants")}>Pants</button>
                <button className={selected("shoes") ? "category-selected" : ""} onClick={() => setCategory("shoes")}>Shoes</button>
                <button className={selected("accessories") ? "category-selected" : ""} onClick={() => setCategory("accessories")}>Misc.</button>
            </div>    
    )
}