import {all, fork, AllEffect, ForkEffect} from 'redux-saga/effects';
import {watchFetchUserLogIn} from './userSaga';
export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(watchFetchUserLogIn)]);
}
