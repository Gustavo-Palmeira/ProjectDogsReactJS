import styled from "styled-components"
import { animateLeft } from "../../../helpers/animations"

export const Feed = styled.div`
  ul {
    animation: ${animateLeft} 0.3s forwards;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;

    @media(max-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`