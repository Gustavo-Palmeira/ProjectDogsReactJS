import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { createUserSchema } from '../../schemas/createUserSchema'
import {
  createUser,
  resetErrorLoading,
  userDataSelector,
} from '../../store/user/actions'
import Button from '../Forms/Button'
import { Label, Error, Input } from '../Forms/Input/styles'

import { Container } from './styles'
import { Head } from '../Head'

const LoginCreate = () => {
  const dispatch = useDispatch()
  const { error, loading } = useSelector(userDataSelector)

  const handleCreateUser = ({ username, email, password }) => {
    dispatch(createUser(username, email, password))
  }

  useEffect(() => {
    dispatch(resetErrorLoading())
  }, [])

  return (
    <Container className=''>
      <Head title='Crie sua conta' />
      <h1 className='title'>Cadastre-se</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={handleCreateUser}
        validationSchema={createUserSchema}
      >
        {({ errors, touched }) => (
          <Form className='form'>
            <Label htmlFor='username'>Usuário</Label>
            <Input type='text' name='username' placeholder='Digite o usuário' />
            {errors.username && touched.username && <Error>{errors.username}</Error>}

            <Label htmlFor='email'>E-mail</Label>
            <Input type='text' name='email' placeholder='Digite o e-mail' />
            {errors.email && touched.email && <Error>{errors.email}</Error>}

            <Label htmlFor='password'>Senha</Label>
            <Input type='password' name='password' placeholder='Digite a senha'/>
            {errors.password && touched.password && <Error>{errors.password}</Error>}

            {loading ? (
              <Button type='submit' disabled>Carregando...</Button>
            ) : (
              <Button type='submit'>Casdastrar</Button>
            )}
            {error && <Error>{error}</Error>}
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default LoginCreate
