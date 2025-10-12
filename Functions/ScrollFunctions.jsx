import React from "react"

export function getButtonMetrics(el) {
  const buttons = el.querySelectorAll('button')
  if (buttons.length < 2) return { buttonWidth: 0, gap: 0 }

  const rect1 = buttons[0].getBoundingClientRect()
  const rect2 = buttons[1].getBoundingClientRect()
  const buttonWidth = buttons[0].offsetWidth
  const gap = rect2.left - rect1.right

  return { buttonWidth, gap }
}

export function useScrollFunctions(scrollRef) {
  function scrollRight() {
    const el = scrollRef.current
    if (!el) return

    const { buttonWidth, gap } = getButtonMetrics(el)
    const step = (buttonWidth + gap) * 4 
    const maxScroll = el.scrollWidth - el.clientWidth
    const newLeft = Math.min(el.scrollLeft + step, maxScroll)

    el.scrollTo({ left: newLeft, behavior: "smooth" })
  }

  function scrollLeft() {
    const el = scrollRef.current
    if (!el) return

    const { buttonWidth, gap } = getButtonMetrics(el)
    const step = (buttonWidth + gap) * 4
    const newLeft = Math.max(el.scrollLeft - step, 0)

    el.scrollTo({ left: newLeft, behavior: "smooth" })
  }

  return { scrollLeft, scrollRight }
}