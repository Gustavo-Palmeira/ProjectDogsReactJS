import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'

import { Label, Input, Error } from '../../Forms/Input/styles'
import { postPhotoSchema } from '../../../schemas/postPhotoSchema'
import { photoDataSelector, postPhoto } from '../../../store/photo/actions'
import { FormButton } from '../../Forms/Button/styles'
import { Container, Preview } from './styles'
import { Head } from '../../Head'

const UserPhotoPost = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(photoDataSelector)
  const [preview, setPreview] = useState(null)

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
      <div>
        <Head title='Poste sua foto' />
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
                  setPreview(event.target.files.length !== 0 ? URL.createObjectURL(event.target.files[0]) : null)
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
      </div>
      {preview && (
        <Preview background={`url(${preview})`} />
      )}
    </Container>
  )
}

export default UserPhotoPost
