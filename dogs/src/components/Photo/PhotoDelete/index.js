import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto, photoDataSelector } from '../../../store/photo/actions';

import { Container } from './styles'

export const PhotoDelete = ({ id }) => {
  const dispatch = useDispatch()
  const { loading } = useSelector(photoDataSelector)

  const handleDeletePhoto = () => {
    const confirm = window.confirm('Tem certeza que deseja excluir?')
    if (confirm) dispatch(deletePhoto(id))
  }

  return (
    <Container>
      {loading
        ? <button className='delete-button' disabled type='button'> Excluir </button>
        : <button onClick={handleDeletePhoto} className='delete-button' type='button'> Excluir </button>}
    </Container>
  )
};


PhotoDelete.propTypes = {
  id: PropTypes.string.isRequired,
}
