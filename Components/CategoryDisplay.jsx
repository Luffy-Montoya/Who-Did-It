import React from "react"
import { LayoutContext } from "./Layout"

export default function 
  CategoryDisplay() {

    const { optionsBar, setOptionsBar, setAskOption, toCategories, setFade, setYesOrNo, charactersLeft } = React.useContext(LayoutContext)

    const setCategory = (name) => {
      setOptionsBar(name)
      setAskOption("")
      setFade(false)
      setYesOrNo("")
    }

    function allShareKeyValue(charactersLeft, key) {
  if (!charactersLeft.length) return false;

  const firstValue = charactersLeft[0][key];

  return charactersLeft.every(c => {
    const val = c[key];
    if (Array.isArray(firstValue) && Array.isArray(val)) {
      // both arrays → must have identical contents (order doesn’t matter)
      if (firstValue.length !== val.length) return false;
      return firstValue.every(v => val.includes(v));
    }
    // otherwise direct comparison
    return val === firstValue;
    });
  }
    
    return(
            <div className={`category-display ${!toCategories ? "offscreen" : ""}`}>
                <div className="categories-top">
                  <button 
                    className={optionsBar === "head" ? "category-selected" : ""} 
                    onClick={() => setCategory("head")}
                    disabled={allShareKeyValue(charactersLeft, "head")}
                  >
                    Head
                  </button>
                  <button 
                    className={optionsBar === "hair" ? "category-selected" : ""} 
                    onClick={() => setCategory("hair")}
                    disabled={allShareKeyValue(charactersLeft, "hair")}
                  >
                    Hair
                  </button>
                  <button 
                    className={optionsBar === "genderSkin" ? "category-selected" : ""} 
                    onClick={() => setCategory("genderSkin")}
                    disabled={allShareKeyValue(charactersLeft, "gender") && allShareKeyValue(charactersLeft, "skin")}
                  >
                    Gender/Skin
                  </button>
                  <button 
                    className={optionsBar === "clothes" ? "category-selected" : ""} 
                    onClick={() => setCategory("clothes")}
                    disabled={allShareKeyValue(charactersLeft, "clothes")}
                  >
                    Clothes
                  </button>
                </div>
                <div className="categories-bottom">
                  <button 
                    className={optionsBar === "shirt" ? "category-selected" : ""} 
                    onClick={() => setCategory("shirt")}
                    disabled={allShareKeyValue(charactersLeft, "shirt")}
                  >
                    Shirt
                  </button>
                  <button 
                    className={optionsBar === "pants" ? "category-selected" : ""} 
                    onClick={() => setCategory("pants")}
                    disabled={allShareKeyValue(charactersLeft, "pants")}
                  >
                    Pants
                  </button>
                  <button 
                    className={optionsBar === "shoes" ? "category-selected" : ""} 
                    onClick={() => setCategory("shoes")}
                    disabled={allShareKeyValue(charactersLeft, "shoes")}
                  >
                    Shoes
                  </button>
                  <button 
                    className={optionsBar === "accessories" ? "category-selected" : ""} 
                    onClick={() => setCategory("accessories")}
                    disabled={allShareKeyValue(charactersLeft, "accessories")}
                  >
                    Misc
                  </button>
                </div>
            </div>    
    )
}