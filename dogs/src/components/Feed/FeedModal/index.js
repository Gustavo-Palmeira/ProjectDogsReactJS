import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getPhoto, photoDataSelector, setCurrentModal } from '../../../store/photo/actions'
import { Error } from '../../Forms/Input/styles'
import { PhotoContent } from '../../Photo/PhotoContent'

import { Modal } from './styles'

export const FeedModal = ({ profile }) => {
  const dispatch = useDispatch()
  const { photo, modal, error } = useSelector(photoDataSelector)

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      dispatch(setCurrentModal(null))
    }
  }

  useEffect(() => {
    if (modal) dispatch(getPhoto(modal.id))
  }, [modal])

  if (error) return <Error>{error}</Error>
  if (photo && modal)
    return (
      <Modal onClick={handleOutsideClick}>
        <PhotoContent profile={profile} />
      </Modal>
    )
  return null
}

FeedModal.propTypes = {
  profile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
}