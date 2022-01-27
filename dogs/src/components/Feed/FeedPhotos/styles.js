import styled from "styled-components"
import { animateLeft } from "../../../helpers/animations"
import image from '../../../assets/empty-state.png'
import { Theme } from "../../../theme"

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

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;

  span {
    font-family: ${Theme.fonts.secondary};
    line-height: 1;
    font-size: 1rem;
    margin: 1rem 0;
    color: ${Theme.colors.quinary};
  }
`

export const EmptyStateImage = styled.div`
  background: url(${image}) no-repeat center center;
  background-size: cover;
  width: 200px;
  height: 120px;
  display: block;

`