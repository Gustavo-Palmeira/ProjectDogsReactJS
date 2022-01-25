import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { photoDataSelector } from '../../../store/photo/actions'
import { userDataSelector } from '../../../store/user/actions'
import { Image } from '../../Image'
import { PhotoComments } from '../PhotoComments'
import { PhotoDelete } from '../PhotoDelete'

import { Photo } from './styles'

export const PhotoContent = () => {
  const { photo: { photo } } = useSelector(photoDataSelector)
  const { user } = useSelector(userDataSelector)

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
                  : <Link to={`/perfil/${photo.author}`} >@{photo.author}</Link>
                }
                <span>{photo.acessos}</span>
              </div>
              <h1 className='title'>
                <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
              </h1>
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
