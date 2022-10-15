import {getData, URL} from '../../../apis';
import {call, ForkEffect, put, takeLatest} from 'redux-saga/effects';
import {USER_ACTION, setUserInfo} from '../actions/userAction';

const getUserInfo: any = (id: string) =>
  getData({
    endpoint: '',
    // endpoint: URL.MY_PROFILE,
    auth: true,
  }).then(res => res);

function* handleFetchUserInfo(body: {type: string; payload: string}) {
  try {
    //khai type vao
    const response: unknown = yield call(getUserInfo, body.payload);
    if (response.data) {
      // console.log("response.data", response.data)
      yield put(setUserInfo(response.data));
    }
  } catch (err) {
    // console.log("err", err)
  }
}
export function* watchFetchUserInfo(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(USER_ACTION.GET_USER_INFO, handleFetchUserInfo);
}
