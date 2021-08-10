import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login, userSelector } from '../../store/user/actions'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../hooks/useForm'

import { Container } from './styles'

const LoginForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const username = useForm()
  const password = useForm()

  console.log(user)

  const handleLogin = async (event) => {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      dispatch(login(username.value, password.value))
    }
  }

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to='/login/create'> Cadastrar </Link>
    </Container>
  )
}

export default LoginForm
