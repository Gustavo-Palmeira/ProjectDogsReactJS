import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'
import { FeedModal } from '../FeedModal'
import { FeedPhotos } from '../FeedPhotos'

import { Container } from './styles'
import { photoDataSelector, resetPhotos } from '../../../store/photo/actions'

export const Feed = ({ userId }) => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const { infinitePhotos } = useSelector(photoDataSelector)
  
  useEffect(() => {
    return () => {
      dispatch(resetPhotos())
    }
  }, [])

  useEffect(() => {
    let wait = false
    const infiniteScroll = () => {
      if (infinitePhotos > 0) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight
  
        if (scroll > height * .90 && !wait) {
          setPage((currentPage) => currentPage + 1)
          wait = true
          setTimeout(() => {
            wait = false
          }, 2000);
        }
      }
    }
    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinitePhotos])

  return (
    <Container>
      <FeedModal />
      <FeedPhotos userId={userId} page={page} />
    </Container>
  )
}

Feed.propTypes = {
  userId: PropTypes.number
}

Feed.defaultProps = {
  userId: 0
}
