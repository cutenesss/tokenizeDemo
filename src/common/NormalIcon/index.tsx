import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {moderateScale} from '../../helpers';

interface NormalIconProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  onPress?: () => void;
  source: Source;
  customStyle?: StyleProp<ViewStyle>;
}

const NormalIcon = (props: NormalIconProps) => {
  const {
    borderRadius,
    height,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    width,
    onPress,
    source,
    customStyle,
  } = props;
  return (
    <TouchableOpacity
      style={[
        {
          marginRight: marginRight || 0,
          marginBottom: marginBottom || 0,
          marginLeft: marginLeft || 0,
          marginTop: marginTop || 0,
        },
        customStyle,
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 0}>
      <FastImage
        source={source}
        style={{
          height: height || moderateScale(20),
          width: width || moderateScale(20),
          borderRadius: borderRadius || moderateScale(6),
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default NormalIcon;
