import { takeLatest, all, call, put } from 'redux-saga/effects'

import {
  getStats as getStatsRequest
} from '../../services/stats'

import {
  actionsTypes,
  getStatsError,
  getStatsSuccess,
} from './actions'

function* getStats() {
  try {
    const token = window.localStorage.getItem('token')
    const { data } = yield call(getStatsRequest, token)
    yield put(getStatsSuccess(data))
  } catch (error) {
    yield put(getStatsError('Não foi possível acessar as estatísticas'))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionsTypes.STATS_REQUEST, getStats),
  ])
}
