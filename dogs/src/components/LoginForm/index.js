import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { loginSchema } from '../../schemas/loginSchema'
import {
  login,
  resetErrorLoading,
  loginErrorSelector,
  loginLoadingSelector,
  userSelector,
} from '../../store/user/actions'
import Button from '../Forms/Button'
import { Container, Input, Error, Label, Register } from './styles'

const LoginForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const loginError = useSelector(loginErrorSelector)
  const loading = useSelector(loginLoadingSelector)
  const navigate = useNavigate()

  const handleLogin = async ({ username, password }) => {
    dispatch(login(username, password))
  }

  useEffect(() => {
    if (user) navigate('/account')
  }, [user])

  useEffect(() => {
    dispatch(resetErrorLoading())
  }, [])

  return (
    <Container>
      <h1 className='title'>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form className='form'>
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
            {loginError && <Error>{loginError}</Error>}
          </Form>
        )}
      </Formik>
      <Link className='forgot' to='/login/forgot'> Esqueceu a senha? </Link>
      <Register>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className='create' to='/login/create'> Cadastrar </Link>
      </Register>
    </Container>
  )
}

export default LoginForm
