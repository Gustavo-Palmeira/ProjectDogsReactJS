import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = {
  photo: null,
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
})
