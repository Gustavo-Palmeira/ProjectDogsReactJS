import { all, fork } from 'redux-saga/effects'

import user from './user/saga'
import photo from './photo/saga'
import stats from './stats/saga'

export default function* rootSaga() {
  return yield all([
    fork(user),
    fork(photo),
    fork(stats)
  ])
}
