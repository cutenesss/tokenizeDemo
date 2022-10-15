import React from 'react';
import {Text} from '@ui-kitten/components';
import {colors} from '../../helpers';

interface PropsText {
  category?: string;
  color?: string;
  content: string;
}

const NormalText = (props: PropsText) => {
  const {color, category, content} = props;
  return (
    <Text
      category={category || 'p1'}
      style={{
        color: color || colors.color3D436C,
      }}>
      {content}
    </Text>
  );
};

export default NormalText;
