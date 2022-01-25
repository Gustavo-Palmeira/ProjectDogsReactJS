import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'

export const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true)

  const handleImageLoad = () => {
    setSkeleton(false)
  }

  return (
    <Wrapper isSkeleton={skeleton}>
      {skeleton && <div className='skeleton' />}
      <img onLoad={handleImageLoad} className='image' alt={alt} {...props} />
    </Wrapper>
  )
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
}