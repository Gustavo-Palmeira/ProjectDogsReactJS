import { api } from '.'

export const postPhoto = async (formData, token) => {
  return api.post('/api/photo', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const getPhotos = async (page, total, user) => {
  return api.get(`/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    { cache: 'no-store' }
  )
}

export const getPhoto = async (id) => {
  return api.get(`/api/photo/${id}`,
    { cache: 'no-store' }
  )
}