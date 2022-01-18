import { takeLatest, all, call, put } from 'redux-saga/effects'
import { postPhoto as postPhotoRequest } from '../../services/photo'

import { actionsTypes, postPhotoError, postPhotoSuccess } from './actions'

function* postPhoto({ payload }) {
  try {
    const { photoData } = payload
    const token = window.localStorage.getItem('token')
    const data = yield call(postPhotoRequest, photoData, token)
    yield put(postPhotoSuccess(data))
  } catch (error) {
    yield put(postPhotoError('Não foi possível enviar os dados, tente novamente'))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionsTypes.POST_PHOTO_REQUEST, postPhoto),
  ])
}
