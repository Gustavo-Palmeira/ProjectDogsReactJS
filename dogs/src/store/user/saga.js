import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getUser, userLogin, tokenValidate, createUserLogin } from '../../services/user'

import {
  login as loginRequest,
  actionsTypes,
  loginSuccess,
  loginError,
  logoutSuccess,
  createUserError,
  createUserSuccess,
} from './actions'

function* login({ payload }) {
  const { username, password } = payload

  try {
    const data = yield call(userLogin, username, password)
    const user = yield call(getUser, data.token)
    yield put(loginSuccess(user))
  } catch (error) {
    yield put(loginError('Usuário ou senha inválidos'))
  }
}

function* logout() {
  try {
    window.localStorage.removeItem('token')
    yield put(logoutSuccess())
  } catch (error) {
    yield put(loginError('Erro ao sair da conta, tente novamente'))
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
  }
}

function* createUser({ payload }) {
  const { username, email, password } = payload

  try {
    const response = yield call(createUserLogin, username, email, password)
    yield put(createUserSuccess(response.data))
    if (response.status === 200) yield put(loginRequest(username, password))
  } catch (error) {
    yield put(createUserError(error.response.data.message))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionsTypes.LOGIN_REQUEST, login),
    takeLatest(actionsTypes.TOKEN_VALIDATE, userTokenValidate),
    takeLatest(actionsTypes.LOGOUT, logout),
    takeLatest(actionsTypes.CREATE_USER_REQUEST, createUser),
  ])
}
