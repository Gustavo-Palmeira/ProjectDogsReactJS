import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { Label, Input, Error } from '../../Forms/Input/styles'
import { postPhotoSchema } from '../../../schemas/postPhotoSchema'
import { photoDataSelector, postPhoto } from '../../../store/photo/actions'
import { FormButton } from '../../Forms/Button/styles'
import { Container, Preview } from './styles'

const UserPhotoPost = () => {
  const dispatch = useDispatch()
  const { photoPosted, loading, error } = useSelector(photoDataSelector)
  const [preview, setPreview] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (photoPosted) navigate('/account')
  }, [photoPosted, navigate])

  const handlePostPhoto = (values) => {
    const formData = new FormData()
    formData.append('img', values.img)
    formData.append('nome', values.name)
    formData.append('peso', values.weight)
    formData.append('idade', values.age)

    dispatch(postPhoto(formData))
  }

  return (
    <Container>
      <Formik
        initialValues={{ name: '', weight: '', age: '', img: '' }}
        onSubmit={handlePostPhoto}
        validationSchema={postPhotoSchema}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form className='form'>
            <Label htmlFor='name'>Nome</Label>
            <Input type='text' name='name' placeholder='Digite o nome'/>
            {errors.name && touched.name && <Error>{errors.name}</Error>}

            <Label htmlFor='weight'>Peso</Label>
            <Input type='text' name='weight' placeholder='Digite o peso'/>
            {errors.weight && touched.weight && <Error>{errors.weight}</Error>}

            <Label htmlFor='age'>Idade</Label>
            <Input type='text' name='age' placeholder='Digite a idade'/>
            {errors.age && touched.age && <Error>{errors.age}</Error>}

            <Label htmlFor='img'>Imagem</Label>
            <Field
              type='file'
              name='img'
              id='img'
              value={values?.img?.filename}
              onChange={(event) => {
                setFieldValue('img', event.target.files[0]);
                setPreview(URL.createObjectURL(event && event.target.files[0]))
              }}
            />
            {errors.img && touched.img && <Error>{errors.img}</Error>}

            {loading ? (
              <FormButton type='submit' disabled>Carregando...</FormButton>
            ) : (
              <FormButton type='submit'>Adicionar foto</FormButton>
            )}
            {error && <Error>{error}</Error>}
          </Form>
        )}
      </Formik>
      {preview && (
        <Preview background={`url(${preview})`} />
      )}
    </Container>
  )
}

export default UserPhotoPost
