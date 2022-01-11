import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { userDataSelector } from '../store/user/actions'

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSelector(userDataSelector)

  return user ? children : loading === false && <Navigate to='/login' />
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}