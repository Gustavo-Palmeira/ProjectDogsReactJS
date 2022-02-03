import { combineReducers } from 'redux'

import user from './user/reducer'
import photo from './photo/reducer'
import stats from './stats/reducer'

export default combineReducers({
  user,
  photo,
  stats
})
