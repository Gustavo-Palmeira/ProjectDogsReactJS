import React from 'react'

import PropTypes from 'prop-types'

import { Container, FormButton } from './styles'

const Button = ({ children, ...props }) => {
  return (
    <Container>
      <FormButton {...props}>{children}</FormButton>
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
