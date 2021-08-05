import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import { UserContext } from '../../contexts/userContext'

import { Container, Nav } from './styles'

const Header = () => {
  const { data } = useContext(UserContext)

  return (
    <Container>
      <Nav className='container'>
        <Link to='/' className='logo' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link to='/account' className='login'>
            {data.nome}
          </Link>
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
