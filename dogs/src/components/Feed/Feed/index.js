import React from 'react'
import { FeedModal } from '../FeedModal'
import { FeedPhotos } from '../FeedPhotos'

import { Container } from './styles'

export const Feed = () => {
  return (
    <Container>
      <FeedModal />
      <FeedPhotos />
    </Container>
  )
}
