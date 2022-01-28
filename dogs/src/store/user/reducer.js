import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = {
  user: null,
  forgotPassword: null,
  error: null,
  loading: null,
}

export default createReducer(INITIAL_STATE, {
  [actionsTypes.LOGIN_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [actionsTypes.LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    user: { ...payload.user.data },
    error: null,
    loading: false,
  }),
  [actionsTypes.LOGOUT_SUCCESS]: (state) => ({
    ...state,
    user: null,
    error: null,
    loading: false,
  }),
  [actionsTypes.LOGIN_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    loading: false,
  }),
  [actionsTypes.CREATE_USER_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [actionsTypes.CREATE_USER_SUCCESS]: (state) => ({
    ...state,
    error: null,
    loading: false,
  }),
  [actionsTypes.CREATE_USER_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    loading: false,
  }),
  [actionsTypes.RESET_ERROR_LOADING]: (state) => ({
    ...state,
    error: null,
    loading: false,
  }),
  [actionsTypes.FORGOT_PASSWORD_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [actionsTypes.FORGOT_PASSWORD_SUCCESS]: (state, { payload }) => ({
    ...state,
    forgotPassword: payload.forgot,
    error: null,
    loading: false,
  }),
  [actionsTypes.FORGOT_PASSWORD_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    loading: false,
  }),
})
