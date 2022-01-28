import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos, photoDataSelector } from '../../../store/photo/actions'
import { Error } from '../../Forms/Input/styles'
import { Loading } from '../../Loading'
import { FeedPhotoItem } from '../FeedPhotoItem'

import { Feed, EmptyState, EmptyStateImage } from './styles'

export const FeedPhotos = ({ userId, page }) => {
  const dispatch = useDispatch()
  const { photos, error, loading } = useSelector(photoDataSelector)

  useEffect(() => {
    dispatch(getPhotos({ page, total: 6, user: userId }))
  }, [userId, page])

  if (error) return <Error>{error}</Error>
  return (
    <Feed>
      {loading && <Loading />}
      {photos?.length > 0 && (
        <ul>
          {photos.map((photo) => <FeedPhotoItem key={photo.id} photo={photo} />)}
        </ul>
      )}
      {!loading && photos?.length < 1 && (
        <EmptyState>
          <EmptyStateImage />
        </EmptyState>
      )}
    </Feed>
  ) 
}

FeedPhotos.propTypes = {
  userId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  page: PropTypes.number.isRequired
}
  
FeedPhotos.defaultProps = {
  userId: 0,
}