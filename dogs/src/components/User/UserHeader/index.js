import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from '../UserHeaderNav'

import { Container } from './styles'

const UserHeader = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    const titles = {
      '/account': 'Conta',
      '/account/stats': 'Estatísticas',
      '/account/post': 'Adicionar foto'
    }

    setTitle(titles[location.pathname])
  }, [location])

  return (
    <Container>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </Container>
  )
}

export default UserHeader
