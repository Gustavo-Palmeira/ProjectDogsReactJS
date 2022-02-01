import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Form, Formik } from 'formik'
import { Error, Input, Label } from '../Forms/Input/styles'
import Button from '../Forms/Button'
import { Container } from './styles'
import { resetPasswordSchema } from '../../schemas/resetPasswordSchema'
import { resetPassword, userDataSelector } from '../../store/user/actions'
import { Head } from '../Head'

const LoginResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, resetPassword: resetSent } = useSelector(userDataSelector)
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')

  useEffect(() => {
    if (resetSent) navigate('/login')
  }, [resetSent])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paramsKey = params.get('key')
    const paramLogin = params.get('login')

    if (paramsKey) setKey(paramsKey)
    if (paramLogin) setLogin(paramLogin)
  }, [])

  const handleResetPassword = (password) => {
    dispatch(resetPassword({ password, key, login }))
  }

  return (
    <Container>
      <Head title='Trocar senha' />
      <h1 className='title'>Escolha uma nova senha</h1>
      <Formik
        initialValues={{ password: '' }}
        onSubmit={handleResetPassword}
        validationSchema={resetPasswordSchema}
      >
        {({ errors, touched }) => (
          <Form className='form'>
            <Label htmlFor='password'>Nova senha</Label>
            <Input
              type='password'
              name='password'
              placeholder='Digite sua nova senha'
            />
            {errors.password && touched.password && <Error>{errors.password}</Error>}
            
            {loading ? (
              <Button type='submit' disabled>Enviando...</Button>
            ) : (
              <Button type='submit'>Trocar senha</Button>
            )}
            {error && <Error>{error}</Error>}
          </Form>
        )}
        </Formik>
    </Container>
  )
}

export default LoginResetPassword
