import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
}

export default createReducer(INITIAL_STATE, {
  [actionsTypes.LOGIN_REQUEST]: (state) => ({
    user: null,
    error: null,
    loading: true,
  }),
  [actionsTypes.LOGIN_SUCCESS]: (state, { payload }) => ({
    user: { ...payload.user.data },
    error: null,
    loading: false,
  }),
  [actionsTypes.LOGOUT_SUCCESS]: (state) => ({
    user: null,
    error: null,
    loading: false,
  }),
  [actionsTypes.LOGIN_ERROR]: (state, { payload }) => ({
    user: null,
    error: payload.error,
    loading: false,
  }),
  [actionsTypes.CREATE_USER_REQUEST]: (state) => ({
    user: null,
    error: null,
    loading: true,
  }),
  [actionsTypes.CREATE_USER_SUCCESS]: (state, { payload }) => ({
    user: null,
    error: null,
    loading: false,
  }),
  [actionsTypes.CREATE_USER_ERROR]: (state, { payload }) => ({
    user: null,
    error: payload.error,
    loading: false,
  }),
  [actionsTypes.RESET_ERROR_LOADING]: (state) => ({
    ...state,
    error: null,
    loading: false,
  }),
})
