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
