import styled from 'styled-components'
import { Theme } from '../../../theme'

export const Container = styled.div`
  display: flex;
  align-items: center;

  button:first-child {
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
    padding: 0px;

    &:after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 2px;
      background-color: currentColor;
      border-radius: 2px;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: .2s;
    }

    &:active,
    &:hover,
    &.mobile-button-active {
      outline: none;
      background-color: ${Theme.colors.light};
      box-shadow: 0 0 0 3px ${Theme.colors.quaternary};
      border-color: ${Theme.colors.secondary};
      color: ${Theme.colors.secondary};
    }

    &.mobile-button-active {
      &:after {
        transform: rotate(-90deg);
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
      }
    }
  }
`

export const Nav = styled.nav`
  &.full-nav {
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
  }

  &.mobile-nav {
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 0 1rem;
    background-color: ${Theme.colors.white};
    box-shadow: 1px 1px 8px 2px ${`${Theme.colors.dark}44`};
    border-radius: .2rem;
    transform: translate(-12px);
    opacity: 0;
    pointer-events: none;

    a,
    button {
      display: flex;
      align-items: center;
      background-color: ${Theme.colors.white};
      width: 100%;
      border: none;
      border-bottom: 1px solid ${Theme.colors.senary};
      padding: .5rem 0;
      cursor: pointer;

      &:hover svg > * {
        fill: ${Theme.colors.secondary};
      }
    }

    button {
      border-bottom: none;
    }

    svg {
      margin-right: 0.5rem;
    }

    &.mobile-nav-active {
      transform: .3s;
      transform: initial;
      opacity: 1;
      z-index: 100;
      pointer-events: initial;
    }
  }

`

export const MobileNav = styled.div`

`
