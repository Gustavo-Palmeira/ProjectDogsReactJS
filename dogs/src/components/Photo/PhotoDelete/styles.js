import styled from "styled-components"
import { Theme } from "../../../theme"

export const Container = styled.div`
  .delete-button {
    background-color: ${Theme.colors.senary};
    padding: .3rem .6rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: .875rem;
    font-family: ${Theme.fonts.primary};
    cursor: pointer;
    border-radius: .4rem;
    transition: .1s;

    &:focus,
    &:hover {
      outline: none;
      background-color: ${Theme.colors.white};
      box-shadow: 0 0 2px 2px ${Theme.colors.light};
      border-color: ${Theme.colors.primary};
    }
  }
`