import React from "react"
import { LayoutContext } from "./Layout"

export default function CategoryDisplay() {

    const { setCategories } = React.useContext(LayoutContext)

    const setCategory = (name) => {
      setCategories((prev) =>
        Object.keys(prev).reduce((acc, key) => {
          acc[key] = key === name
          return acc
        }, {})
      )
    }
    
    return(
            <div className="category-display">
                <button onClick={() => setCategory("head")}>Head</button>
                <button onClick={() => setCategory("hair")}>Hair</button>
                <button onClick={() => setCategory("genderSkin")}>Gender/Skin</button>
                <button onClick={() => setCategory("clothes")}>Clothes</button>
                <button onClick={() => setCategory("shirt")}>Shirt</button>
                <button onClick={() => setCategory("pants")}>Pants</button>
                <button onClick={() => setCategory("shoes")}>Shoes</button>
                <button onClick={() => setCategory("accessories")}>Accessories</button>
            </div>    
    )
}