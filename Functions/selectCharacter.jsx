import React from "react"

export function selectCharacter(category, key, price, setPrice, charactersLeft, setRow1, setRow2, setRow3, setRow4, setActive, setAskDisplay, setCategoryDisplay, setWallet) {

    const filtered = charactersLeft.filter(character => {
    const value = character[category]

    if (Array.isArray(value)) {
        return value.includes(key)
    }
    return value === key
    })

    setAskDisplay(false)
    setCategoryDisplay(true)
    setPrice(price)
    setWallet(prev => prev - price)

    const namesToActivate = filtered.map(character => character.name)
    const newActiveState = namesToActivate.reduce((acc, name) => {
    acc[name] = true
    return acc
    }, {})

    setActive(prev => ({ ...prev, ...newActiveState }))

    setTimeout(() => {
        setRow1(prev => prev.filter(obj => {
            const value = obj[category]
            return Array.isArray(value) ? !value.includes(key) : value !== key
        }))
        setRow2(prev => prev.filter(obj => {
            const value = obj[category]
            return Array.isArray(value) ? !value.includes(key) : value !== key
        }))
        setRow3(prev => prev.filter(obj => {
            const value = obj[category]
            return Array.isArray(value) ? !value.includes(key) : value !== key
        }))
        setRow4(prev => prev.filter(obj => {
            const value = obj[category]
            return Array.isArray(value) ? !value.includes(key) : value !== key
        }))
        }, 2000)
    console.log(key)
}
