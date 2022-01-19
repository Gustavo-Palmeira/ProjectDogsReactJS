export const actionsTypes = {
  POST_PHOTO_REQUEST: '@photo/POST_PHOTO_REQUEST',
  POST_PHOTO_SUCCESS: '@photo/POST_PHOTO_SUCCESS',
  POST_PHOTO_ERROR: '@photo/POST_PHOTO_ERROR',
  GET_PHOTOS_REQUEST: '@photo/GET_PHOTOS_REQUEST',
  GET_PHOTOS_SUCCESS: '@photo/GET_PHOTOS_SUCCESS',
  GET_PHOTOS_ERROR: '@photo/GET_PHOTOS_ERROR',
}

const baseSelector = (state) => state.photo

// Photo Post
export function postPhoto(photoData) {
  return { type: actionsTypes.POST_PHOTO_REQUEST, payload: { photoData } }
}

export function postPhotoSuccess(photoData) {
  return { type: actionsTypes.POST_PHOTO_SUCCESS, payload: { photoData } }
}

export function postPhotoError(error) {
  return { type: actionsTypes.POST_PHOTO_ERROR, payload: { error } }
}

// Photo Get
export function getPhotos({ page, total, user }) {
  return { type: actionsTypes.GET_PHOTOS_REQUEST, payload: { page, total, user } }
}

export function getPhotosSuccess(photosData) {
  return { type: actionsTypes.GET_PHOTOS_SUCCESS, payload: { photosData } }
}

export function getPhotosError(error) {
  return { type: actionsTypes.GET_PHOTOS_ERROR, payload: { error } }
}

// Selectors
export function photoDataSelector(state) {
  return baseSelector(state)
}

