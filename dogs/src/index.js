import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom'
import App from './App'

import { store } from './store'

import { Theme } from './theme'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
