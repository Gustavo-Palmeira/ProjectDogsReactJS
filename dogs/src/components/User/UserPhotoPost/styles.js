import styled from 'styled-components'

import { animateLeft } from '../../../helpers/animations'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
  animation: ${animateLeft} 0.3s forwards;

  #img {
    margin-bottom: 1rem;
  }
`

export const Preview = styled.div`
  border-radius: .4rem;
  background-image: ${({ background }) => background};
  background-size: cover;
  background-position: center center;
  margin: 1rem;

  &::after {
    content: '';
    display: block;
    height: 0px;
  }
`