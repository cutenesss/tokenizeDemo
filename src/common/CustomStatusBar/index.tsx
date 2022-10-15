import React from 'react';
import {StatusBar, View, StatusBarStyle} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors} from '../../helpers';

type Props = {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
  isStatusBarAndroidVisible?: boolean;
};

const CustomStatusBar: React.FC<Props> = (props: Props) => {
  const {isStatusBarAndroidVisible, backgroundColor, barStyle} = props;
  const color = backgroundColor || colors.transparent;
  const height = getStatusBarHeight(isStatusBarAndroidVisible);

  return (
    <View style={{height, backgroundColor: color}}>
      <StatusBar
        networkActivityIndicatorVisible={true}
        translucent
        backgroundColor={color}
        barStyle={barStyle || 'default'}
      />
    </View>
  );
};

export default CustomStatusBar;
