import styled from 'styled-components'
import { FastField } from 'formik'
import { Theme } from '../../theme'
import { animateLeft } from '../../helpers/animations'

export const Container = styled.section`
  animation: ${animateLeft} .3s forwards;

  .form {
    margin-bottom: 2rem;
  }

  .forgot {
    display: inline-block;
    color: ${Theme.colors.quinary};
    padding: 0.5rem 0;
    line-height: 1;
  }

  .forgot::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: currentColor;
    display: block;
  }

  .create {
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    font-family: ${Theme.fonts.primary};
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background-color: ${Theme.colors.secondary};
    color: ${Theme.colors.primary};
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
  }
`

export const Input = styled(FastField)`
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border: solid 1px ${Theme.colors.light};
  border-radius: 0.4rem;
  background-color: ${Theme.colors.light};
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: ${Theme.colors.quaternary};
    background-color: ${Theme.colors.white};
    box-shadow: 0 0 0 1px ${Theme.colors.quaternary};
  }
`

export const Register = styled.div`
  margin: 4rem 0;

  p {
    margin: 2rem 0;
  }

  h2 {
    font-family: ${Theme.fonts.secondary};
    line-height: 1;
    font-size: 2rem;
  }

  h2::after {
    content: '';
    display: block;
    background-color: ${Theme.colors.senary};
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`