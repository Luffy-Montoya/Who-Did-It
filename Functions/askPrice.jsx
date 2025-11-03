export const askMinResults = {

    head: {
        none: 12,
        bow: 2,
        glasses: 6,
        hat: 5
    },

    hair: {
        black: 7,
        blonde: 2,
        brown: 9,
        gray: 5,
        orange: 2
    },

    genderSkin: {
        male: 9,
        female: 9,
        light: 12,
        dark: 12
    },

    clothes: {
        apron: 3,
        jacket: 6,
        pants: 5,
        skirt: 7,
        suit: 2,
        tie: 5
    },

    shirt: {
        blue: 7,
        green: 3,
        pink: 5,
        purple: 5,
        red: 2,
        white: 2
    },

    pants: {
        none: 5,
        black: 2,
        blue: 7,
        brown: 2,
        gray: 6,
        green: 1,
        pink: 1
    },

    shoes: {
        black: 9,
        blue: 2,
        brown: 5,
        gray: 4,
        purple: 2,
        red: 2,
        white: 2
    },

    acc: {
        none: 6,
        animals: 2,
        badge: 4,
        basketball: 1,
        books: 2,
        broom: 1,
        clipboard: 1,
        computer: 1,
        mask: 1,
        math: 1,
        notepad: 1,
        purse: 2,
        science: 1,
        watch: 1,
        whistle: 2
    }
}

export function calcPrice(option, level, charityEnabled) {

    const base = 3.5 + (level)                  
    const rate = 1.7 + (level * 0.2)              
    const price = !charityEnabled ? Math.round(base + (rate * option)) : 0
    return price

}

