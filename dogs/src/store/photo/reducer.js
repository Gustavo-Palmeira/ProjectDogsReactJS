import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = {
  photoPosted: null,
  photos: null,
  photo: null,
  modal: null,
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
    photoPosted: payload.photoData,
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
  [actionsTypes.GET_PHOTO_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [actionsTypes.GET_PHOTO_SUCCESS]: (state, { payload }) => ({
    ...state,
    photo: payload.photoData,
    error: null,
    loading: false,
  }),
  [actionsTypes.GET_PHOTO_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    loading: false,
  }),
  [actionsTypes.SET_PHOTO_MODAL]: (state, { payload }) => ({
    ...state,
    modal: payload.photo,
    photo: payload.photo,
    error: null,
    loading: false,
  }),
  [actionsTypes.POST_PHOTO_COMMENT_SUCCESS]: (state, { payload }) => ({
    ...state,
    photo: payload.photoComment,
    error: null,
    loading: false,
  }),
  [actionsTypes.DELETE_PHOTO_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [actionsTypes.DELETE_PHOTO_SUCCESS]: (state) => ({
    ...state,
    error: null,
    loading: false,
  }),
  [actionsTypes.DELETE_PHOTO_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    loading: false,
  }),
})
