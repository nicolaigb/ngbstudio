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
