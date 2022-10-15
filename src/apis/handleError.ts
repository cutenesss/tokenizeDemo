import Toast from 'react-native-root-toast';

import {remove, KEY, TypeSession, save, STATUS} from '../helpers';
import {ApiResponse} from 'apisauce';
import {IResponse, IResponseError} from '../../typings';

export const showMessageError = (responseError: Partial<IResponseError>) => {
  const toast = Toast.show(
    responseError.message || responseError.problem || 'Network Error',
    {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    },
  );
  setTimeout(function () {
    Toast.hide(toast);
  }, 1000);
};

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
    case STATUS.FAILED:
      return handleData(response, showToast, 'Bad request');
    case STATUS.UNAUTHORIZED:
      return handleData(response, showToast, 'Unauthorized');
  }
  return handleData<R>(response, showToast);
}

export const handleTokenExpired = () => {
  remove(KEY.INIT_STORAGE);
  save(KEY.KEY_EXPIRED, TypeSession.EXPIRED);
};
