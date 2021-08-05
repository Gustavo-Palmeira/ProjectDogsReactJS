import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import { UserStorage } from './contexts/userContext'

import { GlobalStyles } from './globalStyles'
import { Container } from './styles'

function App() {
  return (
    <Container>
      <GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </Container>
  )
}

export default App
