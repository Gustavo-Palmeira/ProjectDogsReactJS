import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../LoginForm'
import LoginCreate from '../LoginCreate'
import LoginResetPassword from '../LoginResetPassword'
import LoginForgotPassword from '../LoginForgotPassword'

import { Container } from './styles'

const Login = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='create' element={<LoginCreate />} />
        <Route path='forgot' element={<LoginForgotPassword />} />
        <Route path='reset' element={<LoginResetPassword />} />
      </Routes>
    </Container>
  )
}

export default Login
