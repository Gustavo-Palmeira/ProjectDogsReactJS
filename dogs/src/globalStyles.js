import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  --type-primary: Helvetica, Arial, sans-serif;
  --type-secondary: 'Spectral', Georgia;
  --color-first: #333;

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    padding-top: 4rem;
    color: var(---color-first);
    font-family: var(----type-first);
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
    font-family: var(---type-first);
    color: var(---color-first);
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
`
