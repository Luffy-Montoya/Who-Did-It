import React from "react" 

export function allOrNoneHave(cat, key, left) {
    const matches = left.map(char => {
        const val = char[cat];
        return Array.isArray(val) ? val.includes(key) : val === key;
    });

    const allHave = matches.every(Boolean);
    const noneHave = matches.every(val => !val);

    return allHave || noneHave;
}