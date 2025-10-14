
const option = (option) => {return <span className="option">{option}</span>}

const head = {
    any: <>"Do they have {option("Nothing")} on their head?"</>,
    glasses: <>"Are they wearing {option("Glasses")}?"</>,
    hat: <>"Are they wearing a {option("Hat")}?"</>,
    bowBand: <>"Are they wearing a {option("Bow")} or {option("Headband")}?"</>
}

const hair = {
    black: <>"Do they have {option("Black Hair")}?"</>,
    brown: <>"Do they have {option("Brown Hair")}?"</>,
    blonde: <>"Do they have {option("Blonde Hair")}?"</>,
    orange: <>"Do they have {option("Orange Hair")}?"</>,
    gray: <>"Do they have {option("Gray Hair")}?"</>
}

const genderSkin = {
    man: <>"Are they a {option("Man")}?"</>,
    woman: <>"Are they a {option("Woman")}?"</>,
    light: <>"Do they have {option("Light Skin")}?"</>,
    dark: <>"Do they have {option("Dark Skin")}?"</>
}

const clothes = {
    jacket: <>"Are they wearing a {option("Jacket")}?"</>,
    suit: <>"Are they wearing a {option("Suit")}?"</>,
    tie: <>"Are they wearing a {option("Tie")}?"</>,
    apron: <>"Are they wearing an {option("Apron")}?"</>,
    skirt: <>"Are they wearing a {option("Skirt")}?"</>,
    pants: <>"Are they wearing {option("Pants")}?"</>
}

const shirt = {
    red: <>"Are they wearing a {option("Red Shirt")}?"</>,
    blue: <>"Are they wearing a {option("Blue Shirt")}?"</>,
    green: <>"Are they wearing a {option("Green Shirt")}?"</>,
    purple: <>"Are they wearing a {option("Purple Shirt")}?"</>,
    pink: <>"Are they wearing a {option("Pink Shirt")}?"</>,
    white: <>"Are they wearing a {option("White Shirt")}?"</>
}

const pants = {
    any: <>"Are they {option("NOT")} wearing {option("Pants")}?"</>,
    blue: <>"Are they wearing {option("Blue Pants")}?"</>,
    gray: <>"Are they wearing {option("Gray Pants")}?"</>,
    black: <>"Are they wearing {option("Black Pants")}?"</>,
    brown: <>"Are they wearing {option("Brown Pants")}?"</>,
    green: <>"Are they wearing {option("Green Pants")}?"</>,
    magenta: <>"Are they wearing {option("Magenta Pants")}?"</>
}

const shoes = {
    black: <>"Do they have {option("Black Shoes")}?"</>,
    white: <>"Do they have {option("White Shoes")}?"</>,
    gray: <>"Do they have {option("Gray Shoes")}?"</>,
    brown: <>"Do they have {option("Brown Shoes")}?"</>,
    blue: <>"Do they have {option("Blue Shoes")}?"</>,
    red: <>"Do they have {option("Red Shoes")}?"</>,
    purple: <>"Do they have {option("Purple Shoes")}?"</>
}

const acc = {
    any: <>"Do they {option("NOT")} have any accessories at all?"</>,
    whistle: <>"Are they wearing a {option("Whistle")}?"</>,
    books: <>"Are they carrying {option("Books")}?"</>,
    clipboard: <>"Are they holding a {option("Clipboard")}?"</>,
    purse: <>"Do they have a {option("Purse")}?"</>,
    badge: <>"Are they wearing a {option("Badge")}?"</>,
    math: <>"Are they holding some {option("Math Stuff")}?"</>,
    broom: <>"Do they have a {option("Broom")}?"</>,
    animals: <>"Are they holding any {option("Animals")}?"</>,
    mask: <>"Do they have a {option("Mask")}?"</>,
    basketball: <>"Do they have a {option("Basketball")}?"</>,
    computer: <>"Are they carrying a {option("Computer")}?"</>,
    pad: <>"Are they carrying a {option("Notepad")}?"</>,
    watch: <>"Are they wearing a {option("Watch")}?"</>,
    science: <>"Are they holding some {option("Science Stuff")}?"</>
}

export {
    head, 
    hair, 
    genderSkin, 
    clothes, 
    shirt, 
    pants, 
    shoes, 
    acc 
}