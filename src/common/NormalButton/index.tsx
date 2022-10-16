import React from 'react';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {Button} from '@ui-kitten/components';
import {colors, moderateScale} from '../../helpers';
import NormalText from '../NormalText';

interface ButtonProps {
  content?: string;
  onPress?: () => void;
  width?: number;
  backgroundColor?: string;
  color?: string;
  customStyle?: StyleProp<ViewStyle>;
}

const NormalButton = (props: ButtonProps) => {
  const {content, onPress, width, backgroundColor, customStyle, color} = props;
  return (
    <Button
      onPress={onPress}
      children={
        <NormalText
          content={content || ''}
          color={color || colors.color5073F2}
          category="label"
        />
      }
      style={[
        {
          width: width || moderateScale(355),
          backgroundColor: backgroundColor || colors.colorBDCFFF,
          ...styles.button,
        },
        customStyle,
      ]}
    />
  );
};

export default NormalButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: moderateScale(6),
    borderWidth: 0,
  },
});
