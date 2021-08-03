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
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
`
