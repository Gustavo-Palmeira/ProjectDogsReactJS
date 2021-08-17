import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import { tokenValidate } from './store/user/actions'

import { GlobalStyles } from './globalStyles'
import { Container } from './styles'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const autoLogin = () => {
      const token = window.localStorage.getItem('token')
      if (token) dispatch(tokenValidate(token))
    }
    autoLogin()
  }, [])

  return (
    <Container>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
