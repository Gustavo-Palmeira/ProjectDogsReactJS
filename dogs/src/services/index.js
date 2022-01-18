import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dogsapi.origamid.dev/json',
  timeout: 29000,
})

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
}