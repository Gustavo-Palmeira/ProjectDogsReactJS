import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = {
  stats: null,
  error: null,
  loading: null,
}

export default createReducer(INITIAL_STATE, {
  [actionsTypes.STATS_REQUEST]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [actionsTypes.STATS_SUCCESS]: (state, { payload }) => ({
    ...state,
    stats: payload.stats,
    error: null,
    loading: false,
  }),
  [actionsTypes.STATS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    loading: false,
  }),
})
