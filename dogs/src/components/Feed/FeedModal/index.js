import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhoto, photoDataSelector } from '../../../store/photo/actions'
import { Error } from '../../Forms/Input/styles'
import { PhotoContent } from '../../Photo/PhotoContent'

import { Modal } from './styles'

export const FeedModal = () => {
  const dispatch = useDispatch()
  const { photo, modal, error } = useSelector(photoDataSelector)

  useEffect(() => {
    if (modal) dispatch(getPhoto(modal.id))
  }, [modal])

  if (error) return <Error>{error}</Error>
  if (photo)
    return (
      <Modal>
        <PhotoContent />
      </Modal>
    )
  return null
}
