import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

let {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

if (SCREEN_WIDTH > SCREEN_HEIGHT) {
  const h = SCREEN_HEIGHT;
  SCREEN_HEIGHT = SCREEN_WIDTH;
  SCREEN_WIDTH = h;
}

export const getWidth = (): number => width;
export const getHeight = (): number => height;

const scale = SCREEN_WIDTH / 375;

export const moderateScale = (size: number, factor = 0.7) => {
  const newSize = size * scale;
  const newPixelRatioSize = Platform.OS === 'ios' ? newSize : newSize - 2;
  return size + (newPixelRatioSize - size) * factor;
};
