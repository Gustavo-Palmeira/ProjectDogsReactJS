import React from 'react'
import { useParams } from 'react-router-dom'
import { Feed } from '../../Feed/Feed'
import { Head } from '../../Head'

import { Container } from './styles'

const UserProfile = () => {
  const { user } = useParams()
  return (
    <Container className='container mainContainer'>
      <Head title={user} />
      <h1 className='title'>{user}</h1>
      <Feed userId={user} />
    </Container>
  )
}

export default UserProfile
