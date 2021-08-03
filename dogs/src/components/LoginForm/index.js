import React from 'react'
import { Link } from 'react-router-dom'

import Input from '../Forms/Input'
import Button from '../Forms/Button'

import { Container } from './styles'
import useForm from '../../Hooks/useForm'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const handleLogin = async (event) => {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      const response = await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      )
      // console.log(response)
      // const json = await response.json()
      // console.log(json)

      await response.json()
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
