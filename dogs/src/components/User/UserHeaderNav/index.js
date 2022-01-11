import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { logout } from '../../../store/user/actions'
import { ReactComponent as MyPhotos } from '../../../assets/feed.svg'
import { ReactComponent as Stats } from '../../../assets/estatisticas.svg'
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg'
import { ReactComponent as Logout } from '../../../assets/sair.svg'

import { Container, Nav } from './styles'
import { useMedia } from '../../../hooks/useMedia'

const UserHeaderNav = () => {
  const dispatch = useDispatch()
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)
  const { pathname } = useLocation()

  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <Container>
      {mobile && (
        <button
          type='button'
          aria-label='Menu'
          className={mobileMenu ? 'mobile-button-active' : undefined}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <Nav className={`${mobile ? 'mobile-nav' : 'full-nav'} ${mobileMenu ? 'mobile-nav-active' : undefined}`} >
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
      </Nav>
    </Container>
  )
}

export default UserHeaderNav
