import {postData, setToken, URL} from '../../apis';
import {call, ForkEffect, put, takeLatest} from 'redux-saga/effects';
import {USER_ACTION, setUserInfo} from '../actions/userAction';
import {IBodyLogin, IUser} from '../../../typings';
import {SCREEN_ROUTER_APP, showToast} from '../../helpers';
import {reset} from '../../navigation/navigationService';

const startLogIn = ({email, password}: IBodyLogin) =>
  postData({
    endpoint: URL.LOGIN,
    params: {
      email,
      password,
      captcha: 'yWOEjZMIhY',
      captchaBypass: 'yWOEjZMIhY',
    },
  }).then(res => res);

function* handleLogIn(body: {type: string; payload: IBodyLogin}) {
  try {
    //khai type vao
    const response: {data: {data: IUser}} = yield call(
      startLogIn,
      body.payload,
    );
    if (response?.data?.data) {
      yield put(setUserInfo(response?.data?.data));
      showToast('Login with account: ' + response?.data?.data?.email);
      reset(SCREEN_ROUTER_APP.TABHOME);
      setToken(response.data?.data?.token ?? '');
    }
    if (response.data) {
      // console.log("response.data", response.data)
    }
  } catch (err) {
    // console.log("err", err)
  }
}
export function* watchFetchUserLogIn(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(USER_ACTION.LOG_IN, handleLogIn);
}
