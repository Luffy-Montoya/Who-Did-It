export function rearrange({
  charactersLeft, row1, row2, row3, row4,
  setRow1, setRow2, setRow3, setRow4,
  setSizeChanging, setIsVisible,
  refs
}) {
    const len = charactersLeft.length
    const { secondArranged, thirdArranged, fourthArranged, fifthArranged, sixthArranged } = refs

    // Helper to check if a rearrangement is already in the desired shape
    const rowsMatch = (...lengths) => {
    const actual = [row1.length, row2.length, row3.length, row4.length].filter(l => l > 0)
    const target = lengths.filter(l => l > 0)
    return JSON.stringify(actual) === JSON.stringify(target)
    }

    // === 15 layout === (5 / 5 / 5)
    if (!secondArranged.current && len < 16 && len >= 9) {
        if (
            rowsMatch(5, 5, 5) || 
            rowsMatch(4, 5, 5) || 
            rowsMatch(5, 4, 5) || 
            rowsMatch(5, 5, 4) || 
            rowsMatch(4, 4, 5) ||
            rowsMatch(4, 5, 4) ||
            rowsMatch(5, 4, 4) ||
            rowsMatch(4, 4, 4) ||
            rowsMatch(3, 4, 4) ||
            rowsMatch(4, 3, 4) ||
            rowsMatch(4, 4, 3) ||
            rowsMatch(3, 3, 4) ||
            rowsMatch(3, 4, 3) ||
            rowsMatch(4, 3, 3) ||
            rowsMatch(3, 3, 3)   
        ) {
            console.log("15 skipped — already aligned")
            secondArranged.current = true
            setTimeout(() => {
            setSizeChanging(true)
            }, 500)
            setTimeout(() => {
                setSizeChanging(false)
            }, 4500)
        } else {
            setTimeout(() => {
            setIsVisible(false)
            }, 200)
            setTimeout(() => {
            setRow2(charactersLeft.slice(0, (Math.ceil(charactersLeft.length * 1/3))))
            setRow3(charactersLeft.slice((Math.ceil(charactersLeft.length * 1/3)), (Math.ceil(charactersLeft.length * 2/3))))
            setRow4(charactersLeft.slice((Math.ceil(charactersLeft.length * 2/3))))
            setRow1([])
            setIsVisible(true)
            secondArranged.current = true
            console.log("rows for 15 set")
            }, 1200)
        }
        }

        // === 8 layout === (4 / 4)
        if (!thirdArranged.current && len < 9 && len >= 7) {
        if (
            rowsMatch(4, 4) ||
            rowsMatch(3, 4) ||
            rowsMatch(4, 3)
        ) {
            console.log("8 skipped — already aligned")
            thirdArranged.current = true
            setTimeout(() => {
            setSizeChanging(true)
            }, 500)
            setTimeout(() => {
                setSizeChanging(false)
            }, 4500)
        } else {
            setTimeout(() => {
            setIsVisible(false)
            }, 200)
            setTimeout(() => {
            setRow3(charactersLeft.slice(0, 4))
            setRow4(charactersLeft.slice(4))
            setRow1([])
            setRow2([])
            setIsVisible(true)
            thirdArranged.current = true
            console.log("rows for 8 set")
            }, 1200)
        }
        }

        // === 6 layout === (3 / 3)
        if (!fourthArranged.current && len < 7 && len >= 5) {
        if (
            rowsMatch(3, 3) ||
            rowsMatch(2, 3) ||
            rowsMatch(3, 2)
        ) {
            console.log("6 skipped — already aligned")
            fourthArranged.current = true
            setTimeout(() => {
            setSizeChanging(true)
            }, 500)
            setTimeout(() => {
                setSizeChanging(false)
            }, 4500)
        } else {
            setTimeout(() => {
            setIsVisible(false)
            }, 200)
            setTimeout(() => {
            setRow3(charactersLeft.slice(0, 3))
            setRow4(charactersLeft.slice(3))
            setRow1([])
            setRow2([])
            setIsVisible(true)
            fourthArranged.current = true
            console.log("rows for 6 set")
            }, 1200)
        }
        }

        // === 4 layout === (2 / 2)
        if (!fifthArranged.current && len < 5 && len >= 3) {
        if (rowsMatch(2, 2) ||
            rowsMatch(1, 2) ||
            rowsMatch(2, 1)
        ) {
            console.log("4 skipped — already aligned")
            fifthArranged.current = true
            setTimeout(() => {
            setSizeChanging(true)
            }, 500)
            setTimeout(() => {
                setSizeChanging(false)
            }, 4500)
        } else {
            setTimeout(() => {
            setIsVisible(false)
            }, 200)
            setTimeout(() => {
            setRow3(charactersLeft.slice(0, 2))
            setRow4(charactersLeft.slice(2))
            setRow1([])
            setRow2([])
            setIsVisible(true)
            fifthArranged.current = true
            console.log("rows for 4 set")
            }, 1200)
        }
        }

        // === 2 layout === (2)
        if (!sixthArranged.current && len < 3 && len >= 1) {
        if (rowsMatch(2) || rowsMatch(1)) {
            console.log("2 skipped — already aligned")
            sixthArranged.current = true
            setTimeout(() => {
            setSizeChanging(true)
            }, 500)
            setTimeout(() => {
                setSizeChanging(false)
            }, 4500)
        } else {
            setTimeout(() => {
            setIsVisible(false)
            }, 200)
            setTimeout(() => {
            setRow4(charactersLeft.slice(0))
            setRow1([])
            setRow2([])
            setRow3([])
            setIsVisible(true)
            sixthArranged.current = true
            console.log("rows for 2 set")
            }, 1200)
        }
    }
}