import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = {
  photo: null,
  photos: null,
  error: null,
  loading: null,
}

export default createReducer(INITIAL_STATE, {
  [actionsTypes.POST_PHOTO_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [actionsTypes.POST_PHOTO_SUCCESS]: (state, { payload }) => ({
    photo: payload.photoData,
    error: null,
    loading: false,
  }),
  [actionsTypes.POST_PHOTO_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    loading: false,
  }),
  [actionsTypes.GET_PHOTOS_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [actionsTypes.GET_PHOTOS_SUCCESS]: (state, { payload }) => ({
    ...state,
    photos: payload.photosData,
    error: null,
    loading: false,
  }),
  [actionsTypes.GET_PHOTOS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    loading: false,
  }),
})
