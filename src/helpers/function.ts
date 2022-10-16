import Toast from 'react-native-root-toast';
import {IResponseError} from '../../typings';

export const returnURLIcon = (iconName: string) =>
  `https://tokenize-dev.com/assets/images/currency-logos/${iconName}.png`;

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

export const showToast = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
    containerStyle: {alignItems: 'center', justifyContent: 'center'},
  });
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
