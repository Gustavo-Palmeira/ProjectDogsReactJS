import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { Photo } from './styles'
import { setCurrentModal } from '../../../store/photo/actions'

export const FeedPhotoItem = ({ photo }) => {
  const dispatch = useDispatch()

  const setModalPhoto = () => {
    dispatch(setCurrentModal(photo))
  }

  return (
    <Photo onClick={setModalPhoto}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Photo>
  )
}


FeedPhotoItem.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    acessos: PropTypes.string,
  }).isRequired,
}