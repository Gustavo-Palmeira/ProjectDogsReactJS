import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Form, Formik } from 'formik';
import { photoDataSelector, postPhotoComment } from '../../../store/photo/actions';
import { Input, Error } from '../../Forms/Input/styles'
import { ReactComponent as CommentSvg } from '../../../assets/enviar.svg';
import { Container } from './styles'
import { postPhotoCommentSchema } from '../../../schemas/postPhotoCommentSchema';

export const PhotoForm = () => {
  const dispatch = useDispatch()
  const { loading, error, photo: { photo } } = useSelector(photoDataSelector)

  const handlePostComment = ({ comment }) => {
    dispatch(postPhotoComment(photo.id, comment))
  }

  return (
    <Container>
      <Formik
        initialValues={{ comment: '' }}
        onSubmit={( values, { resetForm }) => {
          handlePostComment(values)
          resetForm()
        }}
        validationSchema={postPhotoCommentSchema}
      >
        {({ errors, touched }) => (
          <Form className='form'>
            <Input type='text' component='textarea' name='comment' placeholder='Comente...'/>
            {loading ? (
              <button className='submit-button' type='submit' disabled>Carregando...</button>
            ) : (
              <button className='submit-button' type='submit'>
                <CommentSvg />
              </button>
            )}
            {errors.comment && touched.comment && <Error className='error'>{errors.comment}</Error>}
            {error && <Error className='error'>{error}</Error>}
          </Form>
        )}
      </Formik>
    </Container>
  )
};
