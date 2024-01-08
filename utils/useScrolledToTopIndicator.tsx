import React, { useEffect } from 'react'
import { isTopOfViewport } from './util'

export const useScrolledToTopIndicator = (
  objRefs: React.RefObject<HTMLDivElement>[],
  // eslint-disable-next-line no-unused-vars
  onScrolledToTop: (idx: number) => void,
) => {
  useEffect(
    () => {
      const handleScroll = () => {
        if (window.innerWidth <= 850) {
          objRefs.forEach((ref, idx) => {
            if (ref.current && isTopOfViewport(ref.current)) {
              onScrolledToTop(idx)
            }
          })
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    objRefs.map((ref) => ref.current),
  )
}
