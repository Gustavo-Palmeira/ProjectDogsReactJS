import { keyframes } from "styled-components"

export const animateLeft = keyframes`
  0% { opacity: 0; transform: translateX(-20px) }
  100% { opacity: 1; translateX(0px) }
`

export const scaleUp = keyframes`
  to { transform: initial }
`

export const bark = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const skeleton = keyframes`
  from { background-position: 0px }
  to { background-position: 200% }
`