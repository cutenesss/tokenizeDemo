import {applyMiddleware, createStore, Middleware} from 'redux';
import rootReducers from './rootReducers';

export default function configureStore(sagaMiddleware: Middleware) {
  return createStore(rootReducers, applyMiddleware(sagaMiddleware));
}
