import { Form, Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { Error, Input, Label } from '../Forms/Input/styles'
import Button from '../Forms/Button'

import { Container } from './styles'
import { forgotPassword, userDataSelector } from '../../store/user/actions'
import { forgotPasswordSchema } from '../../schemas/forgotPasswordSchema'

const LoginForgotPassword = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(userDataSelector)

  const handleForgotPassword = (values) => {
    dispatch(forgotPassword({
      login: values.email,
      url: window.location.href.replace('forgot', 'resetar')
    }))
  }

  return (
    <Container>
      <h1 className='title'>Perdeu a senha?</h1>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={handleForgotPassword}
        validationSchema={forgotPasswordSchema}
      >
        {({ errors, touched }) => (
          <Form className='form'>
            <Label htmlFor='email'>E-mail / Usuário</Label>
            <Input
              type='text'
              name='email'
              placeholder='Digite seu usuário'
            />
            {errors.email && touched.email && <Error>{errors.email}</Error>}
            
            {loading ? (
              <Button type='submit' disabled>Enviando...</Button>
            ) : (
              <Button type='submit'>Enviar e-mail</Button>
            )}
            {error && <Error>{error}</Error>}
          </Form>
        )}
        </Formik>
    </Container>
  )

}

export default LoginForgotPassword
