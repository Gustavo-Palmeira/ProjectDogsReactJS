import styled from 'styled-components'
import { Theme } from '../../../theme'

export const Container = styled.div``

export const FormButton = styled.button`
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-family: ${Theme.fonts.primary};
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background-color: ${Theme.colors.secondary};
  color: ${Theme.colors.tertiary};
  transition: 0.1s;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 0 1px ${Theme.colors.quaternary},
                0 0 0 2px ${Theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`
