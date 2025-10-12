import React from "react"

export const askMinResults = {

    head: {
        any: 12,
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
        man: 9,
        woman: 9,
        light: 12,
        dark: 12
    },

    clothes: {
        apron: 3,
        jacket: 6,
        pants: 5,
        skirt: 6,
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
        any: 5,
        black: 2,
        blue: 7,
        brown: 2,
        gray: 6,
        green: 1,
        magenta: 1
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
        any: 6,
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

export function calcPrice(elimsAt24, remaining) {
  // 1) Scale guaranteed eliminations to the current board size
  const eff = Math.round(elimsAt24 * remaining / 24);

  // 2) Piecewise-linear price: gentle ramp for small/medium, steeper for big sweeps
  const base = 3;        // flat cost to ask anything
  const a = 1.25;        // per-elim cost (fair for careful/balanced play)
  const b = 0.75;        // extra per-elim once we pass the “big sweep” threshold
  const t = 6;           // threshold where “big sweep” surcharge kicks in

  const surcharge = Math.max(0, eff - t);
  const raw = base + a * eff + b * surcharge;

  // 3) Round & floor
  return Math.max(4, Math.round(raw)); // minimum 4 to avoid near-free spam
}
