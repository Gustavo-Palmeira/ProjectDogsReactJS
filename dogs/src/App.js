import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './components/Login'
import { tokenValidate } from './store/user/actions'

import { GlobalStyles } from './globalStyles'
import { Container } from './styles'
import { User } from './pages/User'
import { ProtectedRoute } from './helpers/protectedRoute'
import UserProfile from './components/User/UserProfile'
import NotFound from './components/NotFound'

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
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/account/*' element={<ProtectedRoute><User /></ProtectedRoute>} />
            <Route path='/profile/:user' element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
