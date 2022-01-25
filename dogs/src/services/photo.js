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
    { cache: 'no-cache, no-store' }
  )
}

export const getPhoto = async (id) => {
  return api.get(`/api/photo/${id}`,
    { cache: 'no-cache, no-store' }
  )
}

export const postPhotoComment = async (id, comment, token) => {
  return api.post(`/api/comment/${id}`, { comment }, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}

export const deletePhoto = async (id, token) => {
  return api.delete(`/api/photo/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}