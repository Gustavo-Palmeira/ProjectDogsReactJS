import axios from 'axios'

export const baseURL = 'https://dogsapi.origamid.dev/json'

export const api = axios.create({
  baseURL,
  timeout: 29000,
})

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
}