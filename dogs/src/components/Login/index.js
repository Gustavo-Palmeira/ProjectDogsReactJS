import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../LoginForm'
import LoginCreate from '../LoginCreate'
import LoginResetPassword from '../LoginResetPassword'
import LoginForgotPassword from '../LoginForgotPassword'
import { userSelector } from '../../store/user/actions'

import { Container } from './styles'
import { useSelector } from 'react-redux'

const Login = () => {
  const user = useSelector(userSelector)
  console.log(user)
  const navigate = useNavigate()

  if (user) navigate('/account')

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
