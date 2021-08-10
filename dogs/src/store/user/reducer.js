import { createReducer } from 'reduxsauce'

import { actionsTypes } from './actions'

const INITIAL_STATE = { user: {} }

export default createReducer(INITIAL_STATE, {
  [actionsTypes.LOGIN_SUCCESS]: (state, { payload }) => ({
    user: { ...payload.user.data },
  }),
})
