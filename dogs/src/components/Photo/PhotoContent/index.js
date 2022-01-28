import React from 'react'
import { PropTypes } from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { photoDataSelector, resetPhotos, setCurrentModal } from '../../../store/photo/actions'
import { userDataSelector } from '../../../store/user/actions'
import { Image } from '../../Image'
import { PhotoComments } from '../PhotoComments'
import { PhotoDelete } from '../PhotoDelete'

import { Photo } from './styles'

export const PhotoContent = ({ profile }) => {
  const { photo: { photo } } = useSelector(photoDataSelector)
  const { user } = useSelector(userDataSelector)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setCurrentModal(null))
    dispatch(resetPhotos())
  }

  if (photo)
    return (
      <Photo>
        <div className='img-box'>
          <Image src={photo.src} alt={photo.title} />
        </div>
        <div className='details-grid'>
          <div className='details'>
            <div>
              <div className='author'>
                {user && user.username === photo.author
                  ? <PhotoDelete id={photo.id} />
                  : typeof profile !== 'string'
                    ? <Link to={`/profile/${photo.author}`} onClick={closeModal}>@{photo.author}</Link>
                    : <p>@{photo.author}</p>
                }
                <span>{photo.acessos}</span>
              </div>
              <h1 className='title'>{photo.title}</h1>
              <ul className='attributes'>
                <li>{photo.peso} Kg</li>
                <li>{photo.idade} {photo.idade === 1 ? 'ano' : 'anos'}</li>
              </ul>
            </div>
          </div>
          <PhotoComments />
        </div>
      </Photo>
    )
  return null
};

PhotoContent.propTypes = {
  profile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
}