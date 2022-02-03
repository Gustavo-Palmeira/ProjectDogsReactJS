import styled from "styled-components"
import { animateLeft } from '../../helpers/animations'
import { Theme } from "../../theme"

export const Container = styled.section`
  animation: ${animateLeft} 0.3s forwards;
`

export const Success = styled.p`
  color: ${Theme.colors.success}
`