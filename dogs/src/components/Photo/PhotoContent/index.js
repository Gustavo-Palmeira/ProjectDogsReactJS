import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { photoDataSelector } from '../../../store/photo/actions'
import { PhotoComments } from '../PhotoComments'

import { Photo } from './styles'

export const PhotoContent = () => {
  const { photo: { photo } } = useSelector(photoDataSelector)

  if (photo)
    return (
      <Photo>
        <div className='img-box'>
          <img src={photo.src} alt={photo.title} />  
        </div>
        <div className='details'>
          <div>
            <p className='author'>
              <Link to={`/perfil/${photo.author}`} >@{photo.author}</Link>
              <span>{photo.acessos}</span>
            </p>
            <h1 className='title'>
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className='attributes'>
              <li>{photo.peso} Kg</li>
              <li>{photo.idade} {photo.idade === 1 ? 'ano' : 'anos'}</li>
            </ul>
          </div>
          <PhotoComments />
        </div>
      </Photo>
    )
  return null
};
