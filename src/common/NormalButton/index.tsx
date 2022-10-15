import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import {colors, moderateScale} from '../../helpers';
import NormalText from '../NormalText';

interface ButtonProps {
  content?: string;
  onPress?: () => void;
  width?: number;
  backgroundColor?: string;
}

const NormalButton = (props: ButtonProps) => {
  const {content, onPress, width, backgroundColor} = props;
  return (
    <Button
      onPress={onPress}
      children={content || ''}
      style={{
        ...styles.button,
        width: width || moderateScale(355),
        backgroundColor: backgroundColor || colors.colorBDCFFF,
      }}
    />
    // <TouchableOpacity
    //   onPress={onPress}
    //   style={{
    //     ...styles.button,
    //     width: width || moderateScale(355),
    //     backgroundColor: backgroundColor || colors.colorBDCFFF,
    //   }}>
    //   <NormalText content={content || ''} />
    // </TouchableOpacity>
  );
};

export default NormalButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: moderateScale(6),
  },
});
