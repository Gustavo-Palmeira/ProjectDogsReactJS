export const actionsTypes = {
  POST_PHOTO_REQUEST: '@photo/POST_PHOTO_REQUEST',
  POST_PHOTO_SUCCESS: '@photo/POST_PHOTO_SUCCESS',
  POST_PHOTO_ERROR: '@photo/POST_PHOTO_ERROR',
  GET_PHOTOS_REQUEST: '@photo/GET_PHOTOS_REQUEST',
  GET_PHOTOS_SUCCESS: '@photo/GET_PHOTOS_SUCCESS',
  GET_PHOTOS_ERROR: '@photo/GET_PHOTOS_ERROR',
  GET_PHOTO_REQUEST: '@photo/GET_PHOTO_REQUEST',
  GET_PHOTO_SUCCESS: '@photo/GET_PHOTO_SUCCESS',
  GET_PHOTO_ERROR: '@photo/GET_PHOTO_ERROR',
  SET_PHOTO_MODAL: '@photo/SET_PHOTO_MODAL',
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

// Photos Get
export function getPhotos({ page, total, user }) {
  return { type: actionsTypes.GET_PHOTOS_REQUEST, payload: { page, total, user } }
}

export function getPhotosSuccess(photosData) {
  return { type: actionsTypes.GET_PHOTOS_SUCCESS, payload: { photosData } }
}

export function getPhotosError(error) {
  return { type: actionsTypes.GET_PHOTOS_ERROR, payload: { error } }
}

// Photo Get
export function getPhoto(id) {
  return { type: actionsTypes.GET_PHOTO_REQUEST, payload: { id } }
}

export function getPhotoSuccess(photoData) {
  return { type: actionsTypes.GET_PHOTO_SUCCESS, payload: { photoData } }
}

export function getPhotoError(error) {
  return { type: actionsTypes.GET_PHOTO_ERROR, payload: { error } }
}

// Photo Modal
export function setCurrentModal(photo) {
  return { type: actionsTypes.SET_PHOTO_MODAL, payload: { photo } }
}

// Selectors
export function photoDataSelector(state) {
  return baseSelector(state)
}

