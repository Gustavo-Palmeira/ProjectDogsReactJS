import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos, photoDataSelector, resetPhotos } from '../../../store/photo/actions'
import { userDataSelector } from '../../../store/user/actions'
import { Error } from '../../Forms/Input/styles'
import { Loading } from '../../Loading'
import { FeedPhotoItem } from '../FeedPhotoItem'

import { Feed } from './styles'

export const FeedPhotos = ({ userId, page }) => {
  const dispatch = useDispatch()
  const { photos, error, loading } = useSelector(photoDataSelector)
  const { user } = useSelector(userDataSelector)

  useEffect(() => {
    if (user?.id) dispatch(resetPhotos())
  }, [user?.id])

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
      {!loading && photos?.length < 1 && <Error>Nenhuma foto encontrada</Error>}
    </Feed>
  ) 
}

FeedPhotos.propTypes = {
  userId: PropTypes.number,
  page: PropTypes.number.isRequired
}

FeedPhotos.defaultProps = {
  userId: 0,
}