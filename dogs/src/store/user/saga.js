import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getUser, userLogin } from '../../services/user'

import { actionsTypes, loginSuccess } from './actions'

function* login({ payload }) {
  const { username, password } = payload

  try {
    const data = yield call(userLogin, username, password)
    const user = yield call(getUser, data.token)
    yield put(loginSuccess(user))
  } catch (error) {
    console.warn(error)
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actionsTypes.LOGIN_REQUEST, login)])
}
