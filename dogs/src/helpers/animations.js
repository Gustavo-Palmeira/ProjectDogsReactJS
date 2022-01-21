import { keyframes } from "styled-components"

export const animateLeft = keyframes`
  0% { opacity: 0; transform: translateX(-20px) }
  100% { opacity: 1; translateX(0px) }
`

export const scaleUp = keyframes`
  to { transform: initial }
`