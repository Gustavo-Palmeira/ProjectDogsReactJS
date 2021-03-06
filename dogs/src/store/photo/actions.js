export const actionsTypes = {
  POST_PHOTO_REQUEST: '@photo/POST_PHOTO_REQUEST',
  POST_PHOTO_SUCCESS: '@photo/POST_PHOTO_SUCCESS',
  POST_PHOTO_ERROR: '@photo/POST_PHOTO_ERROR',
  POST_PHOTO_COMMENT_REQUEST: '@photo/POST_PHOTO_COMMENT_REQUEST',
  POST_PHOTO_COMMENT_SUCCESS: '@photo/POST_PHOTO_COMMENT_SUCCESS',
  POST_PHOTO_COMMENT_ERROR: '@photo/POST_PHOTO_COMMENT_ERROR',
  GET_PHOTOS_REQUEST: '@photo/GET_PHOTOS_REQUEST',
  GET_PHOTOS_SUCCESS: '@photo/GET_PHOTOS_SUCCESS',
  GET_PHOTOS_ERROR: '@photo/GET_PHOTOS_ERROR',
  RESET_PHOTOS: '@photo/RESET_PHOTOS',
  GET_PHOTO_REQUEST: '@photo/GET_PHOTO_REQUEST',
  GET_PHOTO_SUCCESS: '@photo/GET_PHOTO_SUCCESS',
  GET_PHOTO_ERROR: '@photo/GET_PHOTO_ERROR',
  SET_PHOTO_MODAL: '@photo/SET_PHOTO_MODAL',
  DELETE_PHOTO_REQUEST: '@photo/DELETE_PHOTO_REQUEST',
  DELETE_PHOTO_SUCCESS: '@photo/DELETE_PHOTO_SUCCESS',
  DELETE_PHOTO_ERROR: '@photo/DELETE_PHOTO_ERROR',
}

const baseSelector = (state) => state.photo

// Photo Post
export function postPhoto(photoData) {
  return { type: actionsTypes.POST_PHOTO_REQUEST, payload: { photoData } }
}

export function postPhotoSuccess() {
  return { type: actionsTypes.POST_PHOTO_SUCCESS }
}

export function postPhotoError(error) {
  return { type: actionsTypes.POST_PHOTO_ERROR, payload: { error } }
}

// Photo Post Comment
export function postPhotoComment(id, comment) {
  return { type: actionsTypes.POST_PHOTO_COMMENT_REQUEST, payload: { id, comment } }
}

export function postPhotoCommentSuccess(photoComment) {
  return { type: actionsTypes.POST_PHOTO_COMMENT_SUCCESS, payload: { photoComment } }
}

export function postPhotoCommentError(error) {
  return { type: actionsTypes.POST_PHOTO_COMMENT_ERROR, payload: { error } }
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

export function resetPhotos() {
  return { type: actionsTypes.RESET_PHOTOS }
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

// Photo Delete
export function deletePhoto(id) {
  return { type: actionsTypes.DELETE_PHOTO_REQUEST, payload: { id } }
}

export function deletePhotoSuccess() {
  return { type: actionsTypes.DELETE_PHOTO_SUCCESS }
}

export function deletePhotoError(error) {
  return { type: actionsTypes.DELETE_PHOTO_ERROR, payload: { error } }
}

// Selectors
export function photoDataSelector(state) {
  return baseSelector(state)
}
