import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { loginSchema } from '../../schemas/loginSchema'

import {
  login,
  loginError as setLoginError,
  loginErrorSelector,
  loginLoadingSelector,
  // userSelector,
} from '../../store/user/actions'

import Button from '../Forms/Button'

import { Container, Input, Error, Label } from './styles'

const LoginForm = () => {
  const dispatch = useDispatch()
  // const user = useSelector(userSelector)
  const loginError = useSelector(loginErrorSelector)
  const loading = useSelector(loginLoadingSelector)
  const navigate = useNavigate()

  const handleLogin = async ({ username, password }) => {
    try {
      dispatch(login(username, password))
      navigate('/account')
    } catch {
      dispatch(setLoginError('Credenciais inválidas'))
    }
  }

  return (
    <Container>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Label htmlFor='username'>Usuário</Label>
            <Input
              type='text'
              name='username'
              placeholder='Digite seu usuário'
            />
            {errors.username && touched.username && <Error>{errors.username}</Error>}

            <Label htmlFor='password'>Senha</Label>
            <Input
              type='password'
              name='password'
              placeholder='Digite sua senha'
            />
            {errors.password && touched.password && <Error>{errors.password}</Error>}
            {loading ? (
              <Button type='submit' disabled>Carregando...</Button>
            ) : (
              <Button type='submit'>Entrar</Button>
            )}
            {loginError && <p>{loginError}</p>}
          </Form>
        )}
      </Formik>
      <Link to='/login/create'> Cadastrar </Link>
    </Container>
  )
}

export default LoginForm
