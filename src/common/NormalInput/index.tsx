import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Source} from 'react-native-fast-image';
import {Input} from '@ui-kitten/components';

import Images from '../../../assets';
import NormalIcon from '../NormalIcon';
import {moderateScale} from '../../helpers';

interface NormalInputProps {
  icon?: Source;
  onChangeText: (txt: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const NormalInput = (props: NormalInputProps) => {
  const {placeholder, icon, secureTextEntry, onChangeText} = props;
  const [value, setValue] = React.useState('');

  const renderIconLeft = () => {
    if (icon) {
      return <NormalIcon source={icon} marginRight={moderateScale(8)} />;
    } else {
      return <View />;
    }
  };

  return (
    <Input
      value={value}
      placeholder={placeholder || ''}
      accessoryRight={
        <TouchableOpacity>
          <NormalIcon source={Images.CommonImage.ICON_EYE_WHITE} />
        </TouchableOpacity>
      }
      accessoryLeft={renderIconLeft}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

export default NormalInput;
