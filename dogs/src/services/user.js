import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dogsapi.origamid.dev/json',
  timeout: 29000,
})

export const userLogin = async (username, password) => {
  const { data } = await api.post('/jwt-auth/v1/token', {
    username,
    password,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  window.localStorage.setItem('token', data.token)
  return data
}

export const getUser = async (token) => {
  return api.get('api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}