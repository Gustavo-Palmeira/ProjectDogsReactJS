import { takeLatest, all, call, put } from 'redux-saga/effects'
import {
  postPhoto as postPhotoRequest,
  getPhotos as getPhotosRequest,
  getPhoto as getPhotoRequest
} from '../../services/photo'

import { actionsTypes, getPhotoError, getPhotosError, getPhotosSuccess, getPhotoSuccess, postPhotoError, postPhotoSuccess } from './actions'

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

function* getPhotos({ payload }) {
  try {
    const { page, total, user } = payload
    const { data } = yield call(getPhotosRequest, page, total, user)
    yield put(getPhotosSuccess(data))
  } catch (error) {
    yield put(getPhotosError('Não foi possível carregar o feed de fotos'))
  }
}

function* getPhoto({ payload }) {
  try {
    const { id } = payload
    const { data } = yield call(getPhotoRequest, id)
    yield put(getPhotoSuccess(data))
  } catch (error) {
    yield put(getPhotoError('Não foi possível carregar a foto'))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionsTypes.POST_PHOTO_REQUEST, postPhoto),
    takeLatest(actionsTypes.GET_PHOTOS_REQUEST, getPhotos),
    takeLatest(actionsTypes.GET_PHOTO_REQUEST, getPhoto),
  ])
}
