import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { api } from '../api'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  const getUser = async (token) => {
    const response = await api.get('api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setData(response.data)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    const response = await api.post('/jwt-auth/v1/token', {
      username,
      password,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    window.localStorage.setItem('token', response.data.token)
    getUser(response.data.token)
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}

UserStorage.propTypes = {
  children: PropTypes.element.isRequired,
}
