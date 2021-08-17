import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
}

export default createReducer(INITIAL_STATE, {
  [actionsTypes.LOGIN_REQUEST]: (state, { payload }) => ({
    user: null,
    error: null,
    loading: true,
  }),
  [actionsTypes.LOGIN_SUCCESS]: (state, { payload }) => ({
    user: { ...payload.user.data },
    error: null,
    loading: false,
  }),
  [actionsTypes.LOGOUT_SUCCESS]: (state, { payload }) => ({
    user: null,
    error: null,
    loading: false,
  }),
  [actionsTypes.LOGIN_ERROR]: (state, { payload }) => ({
    user: null,
    error: payload.error,
    loading: false,
  }),
})
