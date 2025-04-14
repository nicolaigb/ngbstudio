export const isTopOfViewport = (element: Element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 100 &&
    rect.top <= 150 &&
    rect.left >= 0 &&
    rect.bottom <= 500 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export const pickRandNNumbers = (n: number, length: number) => {
  const randNums: Set<number> = new Set([])
  for (let i = 0; i < length; i += 1) {
    let randNum = Math.floor(Math.random() * n)
    while (randNums.has(randNum)) {
      randNum = Math.floor(Math.random() * n)
    }
    randNums.add(randNum)
  }

  return Array.from(randNums)
}
