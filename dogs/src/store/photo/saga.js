import { takeLatest, all, call, put } from 'redux-saga/effects'
import {
  postPhoto as postPhotoRequest,
  postPhotoComment as postPhotoCommentRequest,
  deletePhoto as deletePhotoRequest
} from '../../services/photo'
import { getPhotoFetch, getPhotosFetch } from '../../services/withFetch'

import { actionsTypes, deletePhotoError, getPhotoError, getPhotosError, getPhotosSuccess, getPhotoSuccess, postPhotoCommentError, postPhotoCommentSuccess, postPhotoError, postPhotoSuccess } from './actions'

function* postPhoto({ payload }) {
  try {
    const { photoData } = payload
    const token = window.localStorage.getItem('token')
    const data = yield call(postPhotoRequest, photoData, token)
    yield put(postPhotoSuccess(data))
    window.location.href = '/account'
  } catch (error) {
    yield put(postPhotoError('Não foi possível enviar os dados, tente novamente'))
  }
}

function* getPhotos({ payload }) {
  try {
    const { page, total, user } = payload
    const { data } = yield call(getPhotosFetch, page, total, user)
    yield put(getPhotosSuccess(data))
  } catch (error) {
    yield put(getPhotosError('Não foi possível carregar o feed de fotos'))
  }
}

function* getPhoto({ payload }) {
  try {
    const { id } = payload
    const { data } = yield call(getPhotoFetch, id)
    yield put(getPhotoSuccess(data))
  } catch (error) {
    yield put(getPhotoError('Não foi possível carregar a foto'))
  }
}

function* postPhotoComment({ payload }) {
  try {
    const { id, comment } = payload
    const token = window.localStorage.getItem('token')
    yield call(postPhotoCommentRequest, id, comment, token)
    const { data } = yield call(getPhotoFetch, id)
    yield put(postPhotoCommentSuccess(data))
  } catch (error) {
    yield put(postPhotoCommentError('Não foi possível enviar o comentário, tente novamente'))
  }
}

function* deletePhoto({ payload }) {
  try {
    const { id } = payload
    const token = window.localStorage.getItem('token')
    yield call(deletePhotoRequest, id, token)
    window.location.reload()
  } catch (error) {
    yield put(deletePhotoError('Não foi possível excluir a foto'))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionsTypes.POST_PHOTO_REQUEST, postPhoto),
    takeLatest(actionsTypes.GET_PHOTOS_REQUEST, getPhotos),
    takeLatest(actionsTypes.GET_PHOTO_REQUEST, getPhoto),
    takeLatest(actionsTypes.POST_PHOTO_COMMENT_REQUEST, postPhotoComment),
    takeLatest(actionsTypes.DELETE_PHOTO_REQUEST, deletePhoto),
  ])
}
