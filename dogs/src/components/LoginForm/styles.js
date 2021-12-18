import styled from 'styled-components'
import { FastField } from 'formik'
import { Theme } from '../../theme'

export const Container = styled.section``

export const Input = styled(FastField)`
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
    box-shadow: 0 0 0 1px ${Theme.colors.quaternary};
  }
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`

export const Error = styled.p`
  color: ${Theme.colors.danger};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`
