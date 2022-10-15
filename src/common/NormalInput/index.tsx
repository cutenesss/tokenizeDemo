import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {Source} from 'react-native-fast-image';
import {Input} from '@ui-kitten/components';

import Images from '../../../assets';
import NormalIcon from '../NormalIcon';
import {colors, Fonts, moderateScale} from '../../helpers';

interface NormalInputProps {
  icon?: Source;
  onChangeText: (txt: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  showSecureText?: boolean;
  defaultValue?: string;
}

const NormalInput = (props: NormalInputProps) => {
  const {
    placeholder,
    icon,
    onChangeText,
    customStyle,
    secureTextEntry,
    defaultValue,
  } = props;
  const [value, setValue] = React.useState(defaultValue || '');
  const [showSecureText, setShowSecureText] = React.useState(
    secureTextEntry || false,
  );

  const renderIconLeft = () => {
    if (icon) {
      return <NormalIcon source={icon} marginRight={moderateScale(8)} />;
    } else {
      return <View />;
    }
  };

  const renderIconRight = () => {
    if (showSecureText) {
      return (
        <TouchableOpacity onPress={() => setShowSecureText(show => !show)}>
          <NormalIcon source={Images.CommonImage.ICON_EYE_WHITE} />
        </TouchableOpacity>
      );
    } else {
      return <View />;
    }
  };

  const onChangeValue = (txt: string) => {
    onChangeText(txt);
    setValue(txt);
  };

  return (
    <Input
      value={value}
      placeholder={placeholder || ''}
      accessoryRight={renderIconRight}
      accessoryLeft={renderIconLeft}
      secureTextEntry={showSecureText}
      onChangeText={onChangeValue}
      style={[styles.viewInput, customStyle]}
      textStyle={styles.txtStyle}
      placeholderTextColor={colors.colorD6DFFF}
    />
  );
};

export default NormalInput;
const styles = StyleSheet.create({
  txtStyle: {
    fontSize: moderateScale(15),
    paddingVertical: moderateScale(4),
    fontFamily: Fonts.Roboto,
    color: colors.colorWhite,
  },
  viewInput: {
    backgroundColor: colors.colorFFFFFF10,
    marginBottom: moderateScale(10),
    width: moderateScale(355),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.colorFFFFFF20,
  },
});
