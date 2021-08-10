import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createStore from './createStore'
import combineReducers from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(combineReducers, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export { store }
