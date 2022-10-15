import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Text} from '@ui-kitten/components';
import {colors} from '../../helpers';

interface PropsText {
  category?: string;
  color?: string;
  customStyle?: StyleProp<ViewStyle>;
  content: string;
  onPress?: () => void;
}

const NormalText = (props: PropsText) => {
  const {color, category, content, customStyle, onPress} = props;
  return (
    <View style={customStyle}>
      <Text
        category={category || 'p1'}
        style={{
          color: color || colors.color3D436C,
        }}
        onPress={onPress}>
        {content}
      </Text>
    </View>
  );
};

export default NormalText;
