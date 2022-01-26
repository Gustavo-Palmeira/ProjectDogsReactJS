import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Loading } from '../components/Loading'

import { userDataSelector } from '../store/user/actions'

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSelector(userDataSelector)

  if (loading === null) return <Loading />
  return user ? children : loading === false && <Navigate to='/login' />
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}