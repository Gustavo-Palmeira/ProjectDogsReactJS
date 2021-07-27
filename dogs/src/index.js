import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom'
import App from './App'

import { Theme } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
