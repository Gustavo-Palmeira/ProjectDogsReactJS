import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos, photoDataSelector } from '../../../store/photo/actions'
import { Error } from '../../Forms/Input/styles'
import { Loading } from '../../Loading'
import { FeedPhotoItem } from '../FeedPhotoItem'

import { Feed } from './styles'

export const FeedPhotos = () => {
  const dispatch = useDispatch()
  const { photos, error, loading } = useSelector(photoDataSelector)

  useEffect(() => {
    dispatch(getPhotos({ page: 1, total: 6, user: 15 }))
  }, [])

  if (error) return <Error>{error}</Error>
  if (loading) return <Loading />
  if (photos)
    return (
      <Feed>
        <ul>
          {photos.map((photo) => <FeedPhotoItem key={photo.id} photo={photo} />)}
        </ul>
      </Feed>
    ) 
  return null
}
