import {IBodyLogin, IUser} from '../../../typings';

export const USER_ACTION = {
  LOG_IN: 'LOG_IN',
  GET_USER_INFO: 'GET_USER_INFO',
  SET_USER_INFO: 'SET_USER_INFO',
};

export const userLogIn = (payload: IBodyLogin) => ({
  type: USER_ACTION.LOG_IN,
  payload,
});

export const setUserInfo = (user?: IUser) => ({
  type: USER_ACTION.SET_USER_INFO,
  payload: user,
});
