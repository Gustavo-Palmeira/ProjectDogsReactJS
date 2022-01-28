import { FastField } from 'formik'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export const Container = styled.div`
  margin-bottom: 1rem;
`

export const InputForm = styled.input`
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border: solid 1px ${Theme.colors.light};
  border-radius: 0.2rem;
  background-color: ${Theme.colors.light};
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: ${Theme.colors.quaternary};
    background-color: ${Theme.colors.white};
    box-shadow: 0 0 0 3px ${Theme.colors.quaternary};
  }
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding: 0.5rem 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`

export const Error = styled.p`
  color: ${Theme.colors.error};
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0.5rem;
  font-family: ${Theme.fonts.primary};
  font-weight: bold;
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