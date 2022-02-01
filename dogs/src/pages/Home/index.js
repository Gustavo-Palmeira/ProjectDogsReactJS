import React from 'react'
import { Feed } from '../../components/Feed/Feed'
import { Head } from '../../components/Head'

import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <Head title='Fotos' description='Home do site Dogs, com o feed de fotos' />
      <Feed id={0} />
    </Container>
  )
}

export default Home
