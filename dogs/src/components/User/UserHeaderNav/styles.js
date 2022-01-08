import styled from 'styled-components'
import { Theme } from '../../../theme'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.colors.light};
    border-radius: 0.2rem;
    border: 1px solid transparent;
    height: 40px;
    width: 40px;
    transition: .1s;
    cursor: pointer;
    margin: 0 12px;

    &:hover {
      background-color: ${Theme.colors.white};
      box-shadow: 0 0 2px 2px ${Theme.colors.light};
      border-color: ${Theme.colors.dark};
      outline: none;
    }

    &:focus {
      background-color: ${Theme.colors.white};
      border-color: ${Theme.colors.secondary};
      box-shadow: 0 0 2px 2px ${Theme.colors.quaternary};
    }

    &:focus svg > * {
      fill: ${Theme.colors.secondary};
    }
  }

  button {
    background-color: ${`${Theme.colors.danger}77`};
  }
`
