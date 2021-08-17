import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  login,
  loginErrorSelector,
  loginLoadingSelector,
  // userSelector,
} from '../../store/user/actions'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../hooks/useForm'

import { Container } from './styles'

const LoginForm = () => {
  const dispatch = useDispatch()
  // const user = useSelector(userSelector)
  const loginError = useSelector(loginErrorSelector)
  const loading = useSelector(loginLoadingSelector)

  const username = useForm()
  const password = useForm()

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
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {loginError && <p>{loginError}</p>}
      </form>
      <Link to='/login/create'> Cadastrar </Link>
    </Container>
  )
}

export default LoginForm
