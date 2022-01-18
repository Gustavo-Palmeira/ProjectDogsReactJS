export const actionsTypes = {
  POST_PHOTO_REQUEST: '@photo/POST_PHOTO_REQUEST',
  POST_PHOTO_SUCCESS: '@photo/POST_PHOTO_SUCCESS',
  POST_PHOTO_ERROR: '@photo/POST_PHOTO_ERROR',
}

const baseSelector = (state) => state.photo

export function postPhoto(photoData) {
  return { type: actionsTypes.POST_PHOTO_REQUEST, payload: { photoData } }
}

export function postPhotoSuccess(photoData) {
  return { type: actionsTypes.POST_PHOTO_SUCCESS, payload: { photoData } }
}

export function postPhotoError(error) {
  return { type: actionsTypes.POST_PHOTO_ERROR, payload: { error } }
}

// Selectors
export function photoDataSelector(state) {
  return baseSelector(state)
}

