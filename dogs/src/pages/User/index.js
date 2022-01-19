import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FeedPhotos } from '../../components/Feed/FeedPhotos'
import UserHeader from '../../components/User/UserHeader'
import UserPhotoPost from '../../components/User/UserPhotoPost'
import UserStats from '../../components/User/UserStats'

import { Container } from './styles'

export const User = () => {
  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path='/' element={<FeedPhotos />} />
        <Route path='/post' element={<UserPhotoPost />} />
        <Route path='/stats' element={<UserStats />} />
      </Routes>

    </Container>
  )
}
