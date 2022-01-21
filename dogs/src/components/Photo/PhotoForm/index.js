import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Form, Formik } from 'formik';
import { photoDataSelector, postPhotoComment } from '../../../store/photo/actions';
import { Label, Input, Error } from '../../Forms/Input/styles'
import { ReactComponent as CommentSvg } from '../../../assets/enviar.svg';
import { Container } from './styles'
import { postPhotoCommentSchema } from '../../../schemas/postPhotoCommentSchema';
import { FormButton } from '../../Forms/Button/styles';

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
        onSubmit={handlePostComment}
        validationSchema={postPhotoCommentSchema}
      >
        {({ errors, touched }) => (
          <Form className='form'>
            <Label htmlFor='comment'>Comentário</Label>
            <Input type='text' component='textarea' name='comment' placeholder='Comente...'/>
            {errors.comment && touched.comment && <Error>{errors.comment}</Error>}

            {loading ? (
              <FormButton type='submit' disabled>Carregando...</FormButton>
            ) : (
              <FormButton type='submit'>
                <CommentSvg />
              </FormButton>
            )}
            {error && <Error>{error}</Error>}
          </Form>
        )}
      </Formik>
    </Container>
  )
};
