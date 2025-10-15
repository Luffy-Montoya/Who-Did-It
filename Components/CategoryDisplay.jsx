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

  // Case 1: all are arrays → check for common overlap
  if (Array.isArray(firstValue)) {
    // If *any* character has a non-array value, return false immediately
    if (charactersLeft.some(c => !Array.isArray(c[key]))) return false;

    let common = new Set(firstValue);
    for (let i = 1; i < charactersLeft.length; i++) {
      const nextSet = new Set(charactersLeft[i][key]);
      common = new Set([...common].filter(v => nextSet.has(v)));
      if (common.size === 0) return false; // no shared element
    }
    return true;
  }

  // Case 2: all are non-arrays → check for equality
  if (charactersLeft.every(c => !Array.isArray(c[key]))) {
    return charactersLeft.every(c => c[key] === firstValue);
  }

  // Case 3: mix of arrays + non-arrays → automatically false
  return false;
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