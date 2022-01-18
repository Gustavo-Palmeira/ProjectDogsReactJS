import { combineReducers } from 'redux'

import user from './user/reducer'
import photo from './photo/reducer'

export default combineReducers({
  user,
  photo
})
