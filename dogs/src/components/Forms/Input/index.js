import React from 'react'

import PropTypes from 'prop-types'

import { Container, Label, InputForm, Error } from './styles'

const Input = ({ label, name, type, value, onChange, onBlur, error }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputForm
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}

export default Input
