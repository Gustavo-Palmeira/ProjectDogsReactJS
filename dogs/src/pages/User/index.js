import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Feed } from '../../components/Feed/Feed'
import NotFound from '../../components/NotFound'
import UserHeader from '../../components/User/UserHeader'
import UserPhotoPost from '../../components/User/UserPhotoPost'
import UserStats from '../../components/User/UserStats'
import { userDataSelector } from '../../store/user/actions'

import { Container } from './styles'

export const User = () => {
  const { user } = useSelector(userDataSelector)

  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed userId={user.id} />} />
        <Route path='/post' element={<UserPhotoPost />} />
        <Route path='/stats' element={<UserStats />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </Container>
  )
}
