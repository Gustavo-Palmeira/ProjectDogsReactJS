import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { userSelector } from '../store/user/actions'

export const ProtectedRoute = ({ children }) => {
  const login = useSelector(userSelector)

  return login ? children : <Navigate to='/login' />
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}