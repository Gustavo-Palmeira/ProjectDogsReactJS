import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { userSelector } from '../../store/user/actions'

import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import { Container, Nav } from './styles'

const Header = () => {
  const user = useSelector(userSelector)

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
