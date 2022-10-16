import Toast from 'react-native-root-toast';

import {
  remove,
  KEY,
  TypeSession,
  save,
  STATUS,
  showMessageError,
} from '../helpers';
import {ApiResponse} from 'apisauce';
import {IResponse} from '../../typings';

function handleData<R>(
  responseError: IResponse<R>,
  showToast?: boolean,
  message?: string,
): IResponse<R> {
  if (showToast) {
    showMessageError({...responseError, message});
  }
  return responseError;
}

export function handleErrorApi<R>(
  response: ApiResponse<R>,
  showToast?: boolean,
): ApiResponse<R> {
  switch (response.status) {
  }
  return handleData<R>(response, showToast);
}

export const handleTokenExpired = () => {
  remove(KEY.INIT_STORAGE);
  save(KEY.KEY_EXPIRED, TypeSession.EXPIRED);
};
