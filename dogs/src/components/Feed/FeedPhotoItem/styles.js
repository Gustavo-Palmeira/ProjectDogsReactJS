import styled from "styled-components"
import eyeSvg from '../../../assets/visualizacao.svg'
import { Theme } from "../../../theme"

export const Photo = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  div {
    grid-area: 1/1;
  }

  &:hover {
    box-shadow: 2px 2px 4px 4px ${`${Theme.colors.primary}44`};
    transition: .3s;
    transform: perspective(200px) translateZ(2px);
  }

  span {
    grid-area: 1/1;
    background-color: ${`${Theme.colors.primary}44`};
    color: ${Theme.colors.white};
    font-size: 1rem;
    text-align: center;
    opacity: 0;

    &:hover {
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:before {
      content: '';
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: .25rem;
      background: url(${eyeSvg}) no-repeat;
    }
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media(max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`