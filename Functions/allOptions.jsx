import { askMinResults } from "../Functions/askPrice";

export const allOptions = [
  // 🧠 Headwear / Glasses
  { category: "head", key: "glasses", minResults: askMinResults.head.glasses },
  { category: "head", key: "hat", minResults: askMinResults.head.hat },
  { category: "head", key: "bow", minResults: askMinResults.head.bow },
  { category: "head", key: "none", minResults: askMinResults.head.none },

  // 💇 Hair Color
  { category: "hair", key: "gray", minResults: askMinResults.hair.gray },
  { category: "hair", key: "black", minResults: askMinResults.hair.black },
  { category: "hair", key: "blonde", minResults: askMinResults.hair.blonde },
  { category: "hair", key: "brown", minResults: askMinResults.hair.brown },
  { category: "hair", key: "orange", minResults: askMinResults.hair.orange },

  // 🧍 Skin Tone
  { category: "skin", key: "light", minResults: askMinResults.genderSkin.light },
  { category: "skin", key: "dark", minResults: askMinResults.genderSkin.dark },

  // 🚻 Gender
  { category: "gender", key: "male", minResults: askMinResults.genderSkin.male },
  { category: "gender", key: "female", minResults: askMinResults.genderSkin.female },

  // 👕 Clothes (general type)
  { category: "clothes", key: "jacket", minResults: askMinResults.clothes.jacket },
  { category: "clothes", key: "tie", minResults: askMinResults.clothes.tie },
  { category: "clothes", key: "pants", minResults: askMinResults.clothes.pants },
  { category: "clothes", key: "skirt", minResults: askMinResults.clothes.skirt },
  { category: "clothes", key: "apron", minResults: askMinResults.clothes.apron },
  { category: "clothes", key: "suit", minResults: askMinResults.clothes.suit },

  // 👚 Shirt Color
  { category: "shirt", key: "blue", minResults: askMinResults.shirt.blue },
  { category: "shirt", key: "red", minResults: askMinResults.shirt.red },
  { category: "shirt", key: "purple", minResults: askMinResults.shirt.purple },
  { category: "shirt", key: "pink", minResults: askMinResults.shirt.pink },
  { category: "shirt", key: "green", minResults: askMinResults.shirt.green },
  { category: "shirt", key: "white", minResults: askMinResults.shirt.white },

  // 👖 Pants / Skirt Color
  { category: "pants", key: "gray", minResults: askMinResults.pants.gray },
  { category: "pants", key: "blue", minResults: askMinResults.pants.blue },
  { category: "pants", key: "brown", minResults: askMinResults.pants.brown },
  { category: "pants", key: "magenta", minResults: askMinResults.pants.magenta },
  { category: "pants", key: "green", minResults: askMinResults.pants.green },
  { category: "pants", key: "black", minResults: askMinResults.pants.black },
  { category: "pants", key: "none", minResults: askMinResults.pants.none },

  // 👟 Shoes
  { category: "shoes", key: "black", minResults: askMinResults.shoes.black },
  { category: "shoes", key: "white", minResults: askMinResults.shoes.white },
  { category: "shoes", key: "blue", minResults: askMinResults.shoes.blue },
  { category: "shoes", key: "gray", minResults: askMinResults.shoes.gray },
  { category: "shoes", key: "brown", minResults: askMinResults.shoes.brown },
  { category: "shoes", key: "purple", minResults: askMinResults.shoes.purple },
  { category: "shoes", key: "red", minResults: askMinResults.shoes.red },

  // 🎒 Accessories
  { category: "accessories", key: "science", minResults: askMinResults.acc.science },
  { category: "accessories", key: "whistle", minResults: askMinResults.acc.whistle },
  { category: "accessories", key: "basketball", minResults: askMinResults.acc.basketball },
  { category: "accessories", key: "writing pad", minResults: askMinResults.acc.notepad },
  { category: "accessories", key: "books", minResults: askMinResults.acc.books },
  { category: "accessories", key: "animals", minResults: askMinResults.acc.animals },
  { category: "accessories", key: "purse", minResults: askMinResults.acc.purse },
  { category: "accessories", key: "badge", minResults: askMinResults.acc.badge },
  { category: "accessories", key: "math", minResults: askMinResults.acc.math },
  { category: "accessories", key: "clipboard", minResults: askMinResults.acc.clipboard },
  { category: "accessories", key: "mask", minResults: askMinResults.acc.mask },
  { category: "accessories", key: "computer", minResults: askMinResults.acc.computer },
  { category: "accessories", key: "broom", minResults: askMinResults.acc.broom },
  { category: "accessories", key: "watch", minResults: askMinResults.acc.watch },
  { category: "accessories", key: "none", minResults: askMinResults.acc.none },
];
