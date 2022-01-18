import { api } from '.'

export const postPhoto = async (formData, token) => {
  return api.post('/api/photo', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })
}