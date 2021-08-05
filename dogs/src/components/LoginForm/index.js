import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../hooks/useForm'
import { UserContext } from '../../contexts/userContext'

import { Container } from './styles'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin } = useContext(UserContext)

  const handleLogin = async (event) => {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
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
