import { all, fork } from 'redux-saga/effects'

import user from './user/saga'
import photo from './photo/saga'

export default function* rootSaga() {
  return yield all([
    fork(user),
    fork(photo)
  ])
}
