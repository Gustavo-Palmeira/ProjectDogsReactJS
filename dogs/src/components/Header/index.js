import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Dogs } from '../../assets/dogs.svg'

import { Container, Nav } from './styles'

const Header = () => {
  const data = null

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
