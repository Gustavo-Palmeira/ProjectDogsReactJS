import React from 'react'
import PropTypes from 'prop-types'

import { Photo } from './styles'

export const FeedPhotoItem = ({ photo }) => {
  return (
    <Photo>
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