import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    padding-top: 4rem;
    color: ${Theme.colors.primary};
    font-family: ${Theme.fonts.primary};
  }

  h1, h2, h3, h4, p {
    margin: 0px;
  }

  ul, li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: ${Theme.colors.primary}
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: ${Theme.fonts.primary};
    color: ${Theme.colors.primary};
  }

  .container {
    max-width: 72rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .main-container {
    margin-top: 2rem;
  }

  .title {
    position: relative;
    font-family: ${Theme.fonts.secondary};
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    z-index: 1;
  }

  .title::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${Theme.colors.secondary}
  }
`
