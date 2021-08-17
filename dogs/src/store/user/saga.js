import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getUser, userLogin, tokenValidate } from '../../services/user'

import {
  actionsTypes,
  loginSuccess,
  loginError,
  logoutSuccess,
} from './actions'

function* login({ payload }) {
  const { username, password } = payload

  try {
    const data = yield call(userLogin, username, password)
    const user = yield call(getUser, data.token)
    yield put(loginSuccess(user))
  } catch (error) {
    yield put(loginError('Usuário ou senha inválidos'))
    console.warn(error)
  }
}

function* logout() {
  try {
    window.localStorage.removeItem('token')
    yield put(logoutSuccess())
  } catch (error) {
    console.warn(error)
  }
}

function* userTokenValidate({ payload }) {
  const { token } = payload

  try {
    yield call(tokenValidate, token)
    const user = yield call(getUser, token)
    yield put(loginSuccess(user))
  } catch (error) {
    yield logout()
    console.warn(error)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionsTypes.LOGIN_REQUEST, login),
    takeLatest(actionsTypes.TOKEN_VALIDATE, userTokenValidate),
    takeLatest(actionsTypes.LOGOUT, logout),
  ])
}
