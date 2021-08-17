import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { userSelector, logout } from '../../store/user/actions'

import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import { Container, Nav } from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)

  const handleLogout = () => {
    dispatch(logout('logout'))
  }

  return (
    <Container>
      <Nav className='container'>
        <Link to='/' className='logo' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {user ? (
          <div>
            <Link to='/account' className='login'>
              {user.nome}
            </Link>
            <button type='button' onClick={handleLogout}>
              Sair
            </button>
          </div>
        ) : (
          <Link to='/login' className='login'>
            Login / Criar
          </Link>
        )}
      </Nav>
    </Container>
  )
}

export default Header
