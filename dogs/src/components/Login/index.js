import React, { useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userSelector } from '../../store/user/actions'
import LoginForm from '../LoginForm'
import LoginCreate from '../LoginCreate'
import LoginResetPassword from '../LoginResetPassword'
import LoginForgotPassword from '../LoginForgotPassword'

import { Container, Content } from './styles'

const Login = () => {
  const navigate = useNavigate()
  const user = useSelector(userSelector)

  useEffect(() => {
    if (user) navigate('/account')
  }, [user])

  return (
    <Container>
      <Content>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='create' element={<LoginCreate />} />
          <Route path='forgot' element={<LoginForgotPassword />} />
          <Route path='reset' element={<LoginResetPassword />} />
        </Routes>
      </Content>
    </Container>
  )
}

export default Login
