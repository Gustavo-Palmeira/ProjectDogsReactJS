import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../../store/user/actions'
import { ReactComponent as MyPhotos } from '../../../assets/feed.svg'
import { ReactComponent as Stats } from '../../../assets/estatisticas.svg'
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg'
import { ReactComponent as Logout } from '../../../assets/sair.svg'

import { Container } from './styles'

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    setMobile(null)
  }, [])

  return (
    <Container>
      <NavLink to='/account' end>
        <MyPhotos />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to='/account/stats'>
        <Stats />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to='/account/post'>
        <AddPhoto />
        {mobile && 'Adicionar foto'}
      </NavLink>
      <button type='button' onClick={handleLogout}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </Container>
  )
}

export default UserHeaderNav
