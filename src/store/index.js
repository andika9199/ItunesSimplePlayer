import { applyMiddleware, compose, createStore} from 'redux'
// need to find out later
// import { configureStore as createStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import sagas from './sagas'

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  let middlewares = applyMiddleware(sagaMiddleware)

  const composeEnhancers = compose
  middlewares = composeEnhancers(middlewares)
  const store = createStore(rootReducer, initialState, middlewares)
  sagas.map((saga) => sagaMiddleware.run(saga, store.dispatch))
  return store
}

const store = configureStore({})
export default store
