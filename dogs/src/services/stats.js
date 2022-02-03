import { api } from '.'

export const getStats = async (token) => {
  return api.get('/api/stats', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}