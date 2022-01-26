import React from 'react'
import { PropTypes } from 'prop-types'
import { FeedModal } from '../FeedModal'
import { FeedPhotos } from '../FeedPhotos'

import { Container } from './styles'

export const Feed = ({ userId }) => {
  return (
    <Container>
      <FeedModal />
      <FeedPhotos userId={userId} />
    </Container>
  )
}

Feed.propTypes = {
  userId: PropTypes.number
}

Feed.defaultProps = {
  userId: 0
}
